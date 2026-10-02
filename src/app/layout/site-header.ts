import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  protected readonly menuOpen = signal(false);

  readonly links = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/nosotros', label: 'Nosotros', exact: false },
    { path: '/servicios', label: 'Servicios', exact: false },
    { path: '/flota', label: 'Flota', exact: false },
    { path: '/cobertura', label: 'Cobertura', exact: false },
    { path: '/contacto', label: 'Contacto', exact: false },
  ] as const;

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
