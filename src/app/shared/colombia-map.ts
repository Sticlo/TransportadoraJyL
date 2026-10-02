import { Component, computed, input } from '@angular/core';

export interface MapCity {
  name: string;
  lat: number;
  lon: number;
  labelSide?: 'left' | 'right';
  hub?: boolean;
  port?: boolean;
}

/** Bounds of the mainland outline in SVG units and the lat/lon they correspond to. */
const BOUNDS = {
  x0: 260.8,
  x1: 876.1,
  y0: 103.2,
  y1: 954.5,
  lonWest: -79.02,
  lonEast: -66.85,
  latNorth: 12.46,
  latSouth: -4.23,
};

function project(lat: number, lon: number): { x: number; y: number } {
  const b = BOUNDS;
  return {
    x: b.x0 + ((lon - b.lonWest) / (b.lonEast - b.lonWest)) * (b.x1 - b.x0),
    y: b.y0 + ((b.latNorth - lat) / (b.latNorth - b.latSouth)) * (b.y1 - b.y0),
  };
}

/** Outline based on Simplemaps Colombia SVG (free for commercial use). */
@Component({
  selector: 'app-colombia-map',
  templateUrl: './colombia-map.html',
  styleUrl: './colombia-map.scss',
})
export class ColombiaMap {
  readonly cities = input<readonly MapCity[]>();
  readonly active = input<string | null>(null);

  protected readonly pins = computed(() =>
    (this.cities() ?? []).map((city) => ({ ...city, ...project(city.lat, city.lon) })),
  );

  protected readonly hub = computed(() => this.pins().find((pin) => pin.hub));

  protected readonly routes = computed(() => {
    const hub = this.hub();
    if (!hub) {
      return [];
    }
    return this.pins()
      .filter((pin) => !pin.hub)
      .map((pin) => {
        const mx = (hub.x + pin.x) / 2;
        const my = (hub.y + pin.y) / 2;
        const dx = pin.x - hub.x;
        const dy = pin.y - hub.y;
        const bend = 0.18;
        return {
          name: pin.name,
          d: `M${hub.x.toFixed(1)} ${hub.y.toFixed(1)} Q${(mx - dy * bend).toFixed(1)} ${(my + dx * bend).toFixed(1)} ${pin.x.toFixed(1)} ${pin.y.toFixed(1)}`,
        };
      });
  });
}
