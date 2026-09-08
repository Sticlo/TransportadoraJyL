import { Component } from '@angular/core';
import { COMPANY_NAME, displayPhone, whatsappUrl } from '../core/contact';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  readonly phoneLabel = displayPhone();
}
