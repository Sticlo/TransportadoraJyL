import { Component } from '@angular/core';
import { PageHero } from '../shared/page-hero';
import { Contact } from '../sections/contact';

@Component({
  selector: 'app-contacto',
  imports: [PageHero, Contact],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class ContactoPage {}
