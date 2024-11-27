import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./form.component'),
  },
] as Routes;
