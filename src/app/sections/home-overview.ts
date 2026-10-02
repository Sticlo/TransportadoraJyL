import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { TiltDirective } from '../shared/tilt.directive';
import { ParallaxDirective } from '../shared/parallax.directive';
import { ColombiaMap, MapCity } from '../shared/colombia-map';
import { COVERAGE_HUB, COVERAGE_REGIONS } from '../core/coverage';

@Component({
  selector: 'app-home-overview',
  imports: [RouterLink, RevealDirective, TiltDirective, ParallaxDirective, ColombiaMap],
  templateUrl: './home-overview.html',
  styleUrl: './home-overview.scss',
})
export class HomeOverview {
  readonly mapCities: readonly MapCity[] = [
    COVERAGE_HUB,
    ...COVERAGE_REGIONS.flatMap((region) => region.cities),
  ];

  readonly fleet = [
    {
      name: '40 Minimulas',
      text: 'Transporte de carga y distribución nacional.',
      tag: 'Distribución nacional',
      image: '/images/flota/intl-azul-sm.webp',
    },
    {
      name: '4 Tractomulas',
      text: 'Larga distancia, carga completa y mayor capacidad.',
      tag: 'Carga completa',
      image: '/images/flota/kw-tubos-sm.webp',
    },
    {
      name: '2 Turbos',
      text: 'Menor volumen, distribución y entregas flexibles.',
      tag: 'Entregas flexibles',
      image: '/images/flota/turbo-nkr-sm.webp',
    },
  ];

  readonly flipped = signal<ReadonlySet<number>>(new Set());

  onCardClick(index: number): void {
    if (typeof matchMedia === 'function' && matchMedia('(hover: hover)').matches) {
      return;
    }
    this.toggleFlip(index);
  }

  toggleFlip(index: number): void {
    this.flipped.update((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  readonly cities = [
    'Bogotá y Cundinamarca',
    'Costa Atlántica',
    'Antioquia y Eje Cafetero',
    'Valle del Cauca',
    'Cauca y Nariño',
    'Santanderes',
    'Llanos Orientales',
    'Tolima y Huila',
  ];
}
