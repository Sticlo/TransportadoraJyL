import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ServiceIcon } from '../core/services';

@Component({
  selector: 'app-service-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
  styles: `
    :host {
      display: inline-flex;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
  template: `
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (icon()) {
        @case ('export') {
          <path d="M6 32h30l-4 8H10z" />
          <path d="M12 32v-8h8v8M20 26h8v6" />
          <path d="M36 8h6v6M42 8l-9 9" />
          <path d="M4 44c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2 3 2 6 2" />
        }
        @case ('import') {
          <path d="M6 32h30l-4 8H10z" />
          <path d="M12 32v-8h8v8M20 26h8v6" />
          <path d="M33 17h6v-6M39 17l-9-9" />
          <path d="M4 44c3 0 3-2 6-2s3 2 6 2 3-2 6-2 3 2 6 2 3-2 6-2 3 2 6 2" />
        }
        @case ('truck') {
          <path d="M4 32V14h24v18" />
          <path d="M28 20h9l7 7v5H28" />
          <circle cx="12" cy="34" r="4" />
          <circle cx="36" cy="34" r="4" />
          <path d="M16 34h16" />
        }
        @case ('route') {
          <circle cx="12" cy="36" r="4" />
          <path d="M36 6a7 7 0 0 1 7 7c0 6-7 12-7 12s-7-6-7-12a7 7 0 0 1 7-7z" />
          <circle cx="36" cy="13" r="2.5" />
          <path d="M16 36h10a6 6 0 0 0 0-12h-4a6 6 0 0 1 0-12h4" stroke-dasharray="3 4" />
        }
        @case ('fleet') {
          <path d="M3 24V12h16v12" />
          <path d="M19 15h6l4 4v5H19" />
          <circle cx="9" cy="26" r="2.6" />
          <circle cx="24" cy="26" r="2.6" />
          <path d="M17 42V30h16v12" />
          <path d="M33 33h6l5 5v4H33" />
          <circle cx="23" cy="43" r="2.6" />
          <circle cx="38" cy="43" r="2.6" />
        }
        @case ('itr') {
          <rect x="4" y="10" width="22" height="16" rx="1.5" />
          <path d="M10 10v16M15 10v16M20 10v16" />
          <path d="M30 18h8l-3-3M38 18l-3 3" />
          <rect x="24" y="30" width="7" height="7" rx="1" />
          <rect x="33" y="30" width="7" height="7" rx="1" />
          <rect x="28.5" y="38" width="7" height="7" rx="1" />
        }
      }
    </svg>
  `,
})
export class ServiceIconComponent {
  readonly icon = input.required<ServiceIcon>();
}
