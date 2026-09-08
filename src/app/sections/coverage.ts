import { afterNextRender, Component, ElementRef, inject, OnDestroy, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-coverage',
  imports: [RevealDirective],
  templateUrl: './coverage.html',
  styleUrl: './coverage.scss',
})
export class Coverage implements OnDestroy {
  readonly cities = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Bucaramanga',
    'Pereira',
    'Cartagena',
    'Cúcuta',
  ];

  protected readonly active = signal(false);
  private readonly mapRoot = viewChild<ElementRef<HTMLElement>>('mapRoot');
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const node = this.mapRoot()?.nativeElement;
      if (!node) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.active.set(true);
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.active.set(true);
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.25 },
      );

      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
