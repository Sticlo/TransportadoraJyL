import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.scss',
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input.required<string>();
  readonly image = input<string>();
  readonly imageSm = input<string>();
  readonly imageAlt = input('');
}
