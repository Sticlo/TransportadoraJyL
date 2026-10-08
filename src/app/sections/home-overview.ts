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
      name: 'Minimulas',
      text: 'Contamos con Parque automotor Moderno y ágil para carga seca y paletizada. Ideales para distribución entre ciudades.',
      tag: 'Distribución nacional',
      image: '/images/flota/intl-azul-sm.webp',
    },
    {
      name: 'Tractomulas',
      text: 'Para cargas completas y contenedores de 20 y 40 pies en rutas de larga distancia, hacia y desde los puertos.',
      tag: 'Carga completa',
      image: '/images/flota/kw-tubos-sm.webp',
    },
    {
      name: 'Turbos',
      text: 'Para cargas de menor volumen y entregas urbanas o regionales que necesitan rapidez y flexibilidad.',
      tag: 'Entregas flexibles',
      image: '/images/flota/turbo-forland-sm.webp',
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
