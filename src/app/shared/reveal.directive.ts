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

export type RevealVariant = '' | 'zoom';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.reveal--visible]': 'visible()',
    '[class.reveal--zoom]': "variant() === 'zoom'",
  },
})
export class RevealDirective implements OnDestroy {
  readonly variant = input<RevealVariant>('', { alias: 'appReveal' });
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

      // The root is stretched far above the viewport so anything scrolled past
      // the top still counts as visible; elements only hide again once they
      // drop below the bottom edge, even after a fast fling.
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            this.visible.set(entry.isIntersecting);
          }
        },
        { threshold: 0.12, rootMargin: '100000px 0px -6% 0px' },
      );

      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
