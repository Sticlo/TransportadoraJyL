import { Component, signal } from '@angular/core';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
