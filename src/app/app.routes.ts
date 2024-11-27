import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./usuarios/features/product-shell/product-route')
  },{
     path: 'form',
     loadChildren: () => 
       import('./formulario/form.routes') },
     {
    path: '**',
    redirectTo:''
  }
];
