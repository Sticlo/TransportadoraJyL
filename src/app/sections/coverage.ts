import { Component, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { ColombiaMap, MapCity } from '../shared/colombia-map';
import { whatsappUrl } from '../core/contact';
import { COVERAGE_HUB, COVERAGE_REGIONS } from '../core/coverage';

@Component({
  selector: 'app-coverage',
  imports: [RevealDirective, ColombiaMap],
  templateUrl: './coverage.html',
  styleUrl: './coverage.scss',
})
export class Coverage {
  readonly regions = COVERAGE_REGIONS;
  readonly mapCities: readonly MapCity[] = [
    COVERAGE_HUB,
    ...COVERAGE_REGIONS.flatMap((region) => region.cities),
  ];

  readonly stats = [
    { value: '46', label: 'Vehículos propios' },
    { value: '12', label: 'Ciudades conectadas' },
    { value: '4', label: 'Puertos marítimos' },
  ];

  readonly whatsapp = whatsappUrl('Hola, quiero cotizar una ruta con Transportes J&L SAS');

  protected readonly active = signal<string | null>(null);
}
