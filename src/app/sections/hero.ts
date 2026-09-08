import { Component } from '@angular/core';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';
import { TruckRoad } from './truck-road';

@Component({
  selector: 'app-hero',
  imports: [TruckRoad],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
}
