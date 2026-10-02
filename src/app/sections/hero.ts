import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_NAME, whatsappUrl } from '../core/contact';
import { COMPANY_SERVICES } from '../core/services';
import { ServiceIconComponent } from '../shared/service-icon';
import { RevealDirective } from '../shared/reveal.directive';
import { TiltDirective } from '../shared/tilt.directive';
import { TruckRoad } from './truck-road';

@Component({
  selector: 'app-hero',
  imports: [TruckRoad, RouterLink, RevealDirective, TiltDirective, ServiceIconComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly company = COMPANY_NAME;
  readonly whatsapp = whatsappUrl();
  readonly flipped = signal<Record<number, boolean>>({});

  readonly slides = [
    { src: '/images/hero/autopista.webp', label: 'Autopistas nacionales' },
    { src: '/images/hero/andes.webp', label: 'Rutas por los Andes' },
    { src: '/images/hero/ciudad.webp', label: 'Ciudades principales' },
    { src: '/images/hero/puerto.webp', label: 'Puertos y terminales' },
  ];
  readonly active = signal(0);
  readonly paused = signal(false);
  readonly ready = signal(false);

  private readonly scene = viewChild<ElementRef<HTMLElement>>('scene');
  private readonly copy = viewChild<ElementRef<HTMLElement>>('copy');
  private readonly stage = viewChild<ElementRef<HTMLElement>>('stage');
  private readonly actions = viewChild<ElementRef<HTMLElement>>('actions');

  readonly features = COMPANY_SERVICES;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.paused.set(true);
        this.ready.set(true);
        return;
      }

      this.ready.set(true);

      let frame = 0;
      const onScroll = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => this.updateParallax());
      };

      this.updateParallax();
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        cancelAnimationFrame(frame);
        window.removeEventListener('scroll', onScroll);
      });
    });
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.slides.length);
  }

  goTo(index: number): void {
    this.active.set(index);
  }

  togglePause(): void {
    this.paused.update((p) => !p);
  }

  toggleFlip(index: number): void {
    this.flipped.update((state) => ({ ...state, [index]: !state[index] }));
  }

  private updateParallax(): void {
    const hero = this.host.nativeElement;
    const height = hero.offsetHeight || 1;
    const progress = Math.min(1, Math.max(0, window.scrollY / height));

    const scene = this.scene()?.nativeElement;
    const copy = this.copy()?.nativeElement;
    const stage = this.stage()?.nativeElement;
    const actions = this.actions()?.nativeElement;

    if (scene) {
      scene.style.transform = `translate3d(0, ${progress * 56}px, 0) scale(${1 + progress * 0.06})`;
    }

    if (copy) {
      const fade = 1 - progress * 1.35;
      copy.style.opacity = `${Math.max(0, fade)}`;
      copy.style.transform = `translate3d(0, ${progress * -42}px, 0) scale(${1 - progress * 0.08})`;
    }

    if (stage) {
      stage.style.transform = `translate3d(0, ${progress * 140}px, 0)`;
    }

    if (actions) {
      const fade = 1 - progress * 1.2;
      actions.style.opacity = `${Math.max(0, fade)}`;
      actions.style.transform = `translate3d(0, ${progress * 28}px, 0)`;
    }
  }
}
