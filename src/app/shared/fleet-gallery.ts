import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FLEET_GALLERY } from '../core/fleet-photos';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-fleet-gallery',
  imports: [RevealDirective],
  templateUrl: './fleet-gallery.html',
  styleUrl: './fleet-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleetGallery {
  readonly eyebrow = input('En ruta');
  readonly title = input('Nuestra flota en carretera');
  readonly lead = input(
    'Unidades en buen estado y listas para mover tu carga por todo Colombia.',
  );

  readonly photos = FLEET_GALLERY;
  readonly loop = [...FLEET_GALLERY, ...FLEET_GALLERY];
}
