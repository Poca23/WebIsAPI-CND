import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/apis',
    pathMatch: 'full',
  },
  {
    path: 'apis',
    loadComponent: () =>
      import('./features/api-list/components/api-list.component').then((m) => m.ApiListComponent),
  },
  {
    path: 'apis/:id',
    loadComponent: () =>
      import('./features/api-detail/api-detail-module.js').then((m) => m.ApiDetailModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '/apis',
  },
];
