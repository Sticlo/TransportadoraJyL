import { Component } from '@angular/core';
import { SiteHeader } from '../layout/site-header';
import { SiteFooter } from '../layout/site-footer';
import { Hero } from '../sections/hero';
import { Coverage } from '../sections/coverage';
import { Services } from '../sections/services';
import { Trust } from '../sections/trust';
import { Contact } from '../sections/contact';

@Component({
  selector: 'app-home',
  imports: [SiteHeader, SiteFooter, Hero, Coverage, Services, Trust, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
