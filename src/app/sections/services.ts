import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly points = [
    {
      title: 'Carga entre ciudades',
      text: 'Recogemos y entregamos mercancía en rutas urbanas e intermunicipales.',
    },
    {
      title: 'Trato directo',
      text: 'Hablas con el equipo por WhatsApp: cotización clara y respuesta rápida.',
    },
    {
      title: 'Ruta nacional',
      text: 'Cobertura a todo Colombia, con foco en puntualidad y cuidado de la carga.',
    },
  ];
}
