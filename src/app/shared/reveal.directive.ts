import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.reveal--visible]': 'visible()',
  },
})
export class RevealDirective implements OnDestroy {
  readonly delay = input(0, { alias: 'appRevealDelay' });

  protected readonly visible = signal(false);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const node = this.el.nativeElement;
      node.style.setProperty('--reveal-delay', `${this.delay()}ms`);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.visible.set(true);
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.visible.set(true);
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
      );

      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
