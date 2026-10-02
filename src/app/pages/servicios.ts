import { Component } from '@angular/core';
import { PageHero } from '../shared/page-hero';
import { Services } from '../sections/services';

@Component({
  selector: 'app-servicios',
  imports: [PageHero, Services],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class ServiciosPage {}
