import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Shifts the element vertically as it crosses the viewport. The value is the
 * offset in px at the viewport edges: positive moves faster than the scroll,
 * negative lags behind it. Uses `transform`, so don't combine with `appTilt`.
 */
@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  readonly speed = input(40, {
    alias: 'appParallax',
    transform: (value: unknown) => (value === '' || value == null ? 40 : Number(value)),
  });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const node = this.el.nativeElement;
      node.style.willChange = 'transform';

      let inView = false;
      let frame = 0;

      const update = () => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const clamped = Math.max(-1, Math.min(1, progress));
        node.style.transform = `translate3d(0, ${(clamped * this.speed()).toFixed(1)}px, 0)`;
      };

      const onScroll = () => {
        if (inView && !frame) {
          frame = requestAnimationFrame(update);
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) {
            onScroll();
          }
        },
        { rootMargin: '20% 0px 20% 0px' },
      );

      observer.observe(node);
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();

      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (frame) {
          cancelAnimationFrame(frame);
        }
      });
    });
  }
}
