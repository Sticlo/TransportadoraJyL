import { Component } from '@angular/core';
import { Hero } from '../sections/hero';
import { HomeOverview } from '../sections/home-overview';
import { HomeCta } from '../sections/home-cta';
import { FleetGallery } from '../shared/fleet-gallery';

@Component({
  selector: 'app-home',
  imports: [Hero, HomeOverview, FleetGallery, HomeCta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
