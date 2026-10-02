import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COMPANY_ADDRESS,
  COMPANY_CITY,
  mapsLinkUrl,
  whatsappUrl,
} from '../core/contact';
import { TiltDirective } from '../shared/tilt.directive';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';

@Component({
  selector: 'app-home-cta',
  imports: [RouterLink, TiltDirective, RevealDirective, ParallaxDirective],
  templateUrl: './home-cta.html',
  styleUrl: './home-cta.scss',
})
export class HomeCta {
  readonly whatsapp = whatsappUrl();
  readonly address = COMPANY_ADDRESS;
  readonly city = COMPANY_CITY;
  readonly mapsLink = mapsLinkUrl();
}
