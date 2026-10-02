import { Component } from '@angular/core';
import { PageHero } from '../shared/page-hero';
import { Trust } from '../sections/trust';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';

@Component({
  selector: 'app-nosotros',
  imports: [PageHero, Trust],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss',
})
export class Nosotros {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
}
