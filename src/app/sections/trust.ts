import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-trust',
  imports: [RevealDirective],
  templateUrl: './trust.html',
  styleUrl: './trust.scss',
})
export class Trust {
  readonly steps = [
    { label: 'Origen', detail: 'Recogemos tu carga' },
    { label: 'Ruta', detail: 'La movemos entre ciudades' },
    { label: 'Destino', detail: 'Entrega a tiempo' },
  ];
}
