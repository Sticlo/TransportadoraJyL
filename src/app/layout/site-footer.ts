import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COMPANY_ADDRESS,
  COMPANY_CITY,
  COMPANY_EMAIL,
  COMPANY_NAME,
  displayPhone,
  emailUrl,
  mapsLinkUrl,
  whatsappUrl,
} from '../core/contact';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  readonly year = new Date().getFullYear();
  readonly address = COMPANY_ADDRESS;
  readonly city = COMPANY_CITY;
  readonly phone = displayPhone();
  readonly email = COMPANY_EMAIL;
  readonly emailLink = emailUrl();
  readonly mapsLink = mapsLinkUrl();

  readonly siteLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/flota', label: 'Flota' },
  ] as const;

  readonly contactLinks = [
    { path: '/cobertura', label: 'Cobertura' },
    { path: '/contacto', label: 'Contacto' },
  ] as const;
}
