import { Routes } from "@angular/router";

export default [
  {path: '', loadComponent:()=> import('../user-list/product-list.component')},
  {
    path: 'user/:id',
    loadComponent: () => import('../user-detail/user-detail.component'),
  },
] as Routes