import { Component } from '@angular/core';
import { COMPANY_SERVICES } from '../core/services';
import { RevealDirective } from '../shared/reveal.directive';
import { ServiceIconComponent } from '../shared/service-icon';

@Component({
  selector: 'app-services',
  imports: [RevealDirective, ServiceIconComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly points = COMPANY_SERVICES;
}
