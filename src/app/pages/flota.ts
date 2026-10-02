import { Component } from '@angular/core';
import { PageHero } from '../shared/page-hero';
import { FleetGallery } from '../shared/fleet-gallery';
import { RevealDirective } from '../shared/reveal.directive';
import { whatsappUrl } from '../core/contact';
import { FLEET_PHOTOS } from '../core/fleet-photos';

@Component({
  selector: 'app-flota',
  imports: [PageHero, FleetGallery, RevealDirective],
  templateUrl: './flota.html',
  styleUrl: './flota.scss',
})
export class FlotaPage {
  readonly whatsapp = whatsappUrl('Hola, quiero consultar disponibilidad de flota con Transportes J&L SAS');

  readonly capacity = [
    { value: '40', label: 'Minimulas' },
    { value: '4', label: 'Tractomulas' },
    { value: '2', label: 'Turbos' },
    { value: 'Disponibles', label: 'Contenedores propios' },
  ];

  readonly units = [
    {
      count: '40',
      name: 'Minimulas',
      detail: 'Para carga general y distribución nacional.',
      photo: FLEET_PHOTOS.morada,
    },
    {
      count: '4',
      name: 'Tractomulas',
      detail: 'Para larga distancia y cargas completas de mayor volumen.',
      photo: FLEET_PHOTOS.carpado,
    },
    {
      count: '',
      name: 'Contenedores propios',
      detail: 'Disponibles para ITR, importación, exportación y transporte intermodal.',
      photo: FLEET_PHOTOS.yangMing,
    },
    {
      count: '2',
      name: 'Turbos',
      detail: 'Para cargas de menor volumen y entregas que piden agilidad.',
      photo: FLEET_PHOTOS.turbo,
    },
  ];

  readonly services = [
    'Distribución nacional',
    'Carga seca',
    'Carga completa',
    'Importación',
    'Exportación',
    'Hacia y desde puertos',
    'Centros de distribución',
    'Operaciones recurrentes',
    'Mercancía en contenedor',
  ];
}
