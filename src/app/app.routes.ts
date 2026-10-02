import { Routes } from '@angular/router';
import { Shell } from './layout/shell';
import { Home } from './pages/home';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Home },
      {
        path: 'nosotros',
        loadComponent: () => import('./pages/nosotros').then((m) => m.Nosotros),
      },
      {
        path: 'servicios',
        loadComponent: () => import('./pages/servicios').then((m) => m.ServiciosPage),
      },
      {
        path: 'flota',
        loadComponent: () => import('./pages/flota').then((m) => m.FlotaPage),
      },
      {
        path: 'cobertura',
        loadComponent: () => import('./pages/cobertura').then((m) => m.CoberturaPage),
      },
      {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto').then((m) => m.ContactoPage),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
