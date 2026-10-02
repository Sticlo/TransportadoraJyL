import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) {
      return;
    }

    history.scrollRestoration = 'manual';

    let lastUrl = '';
    inject(Router)
      .events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        const samePage = lastUrl === event.urlAfterRedirects;
        const isFirstLoad = lastUrl === '';
        lastUrl = event.urlAfterRedirects;
        if (isFirstLoad) {
          return;
        }
        // The global `scroll-behavior: smooth` would otherwise animate the jump between pages.
        window.scrollTo({ top: 0, left: 0, behavior: samePage ? 'smooth' : 'instant' });
      });
  }
}
