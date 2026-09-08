import { Component } from '@angular/core';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  readonly year = new Date().getFullYear();
}
