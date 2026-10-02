import {
  afterNextRender,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  host: {
    class: 'tilt',
  },
})
export class TiltDirective implements OnDestroy {
  readonly max = input(10, { alias: 'appTiltMax' });
  readonly glare = input(true, { alias: 'appTiltGlare' });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private glareEl?: HTMLSpanElement;
  private frame = 0;
  private reduced = false;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (this.reduced || !this.glare()) {
        return;
      }

      const glare = document.createElement('span');
      glare.className = 'tilt__glare';
      glare.setAttribute('aria-hidden', 'true');
      this.el.nativeElement.appendChild(glare);
      this.glareEl = glare;
    });
  }

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (this.reduced || event.pointerType === 'touch') {
      return;
    }

    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * this.max() * 2;
    const rotateX = (0.5 - y) * this.max() * 2;

    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      node.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      node.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      node.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`);
      node.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`);
      node.classList.add('tilt--active');
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    const node = this.el.nativeElement;
    cancelAnimationFrame(this.frame);
    node.style.setProperty('--tilt-x', '0deg');
    node.style.setProperty('--tilt-y', '0deg');
    node.classList.remove('tilt--active');
  }

  ngOnDestroy(): void {
    if (typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.frame);
    }
    this.glareEl?.remove();
  }
}
