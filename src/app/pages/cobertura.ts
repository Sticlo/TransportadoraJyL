import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../shared/page-hero';
import { Coverage } from '../sections/coverage';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-cobertura',
  imports: [RouterLink, PageHero, Coverage, RevealDirective],
  templateUrl: './cobertura.html',
  styleUrl: './cobertura.scss',
})
export class CoberturaPage {
  readonly areas = [
    'Bogotá y Cundinamarca',
    'Costa Atlántica',
    'Antioquia y Eje Cafetero',
    'Valle del Cauca',
    'Cauca y Nariño',
    'Santanderes',
    'Llanos Orientales',
    'Tolima y Huila',
    'Zonas industriales y comerciales',
    'Puertos y terminales de carga',
    'Zonas francas, patios y CEDI',
  ];

  readonly operations = [
    {
      from: 'Origen',
      to: 'Destino',
      text: 'Entre plantas, bodegas, CEDI, clientes y puertos.',
    },
    {
      from: 'Puerto',
      to: 'Cliente',
      text: 'Mercancía y contenedores del puerto a tu planta o bodega.',
    },
    {
      from: 'Cliente',
      to: 'Puerto',
      text: 'Tu carga de exportación, de tu bodega al puerto.',
    },
    {
      from: 'Distribución',
      to: 'Nacional',
      text: 'Rutas programadas y recurrentes a ciudades y regiones.',
    },
  ];
}
