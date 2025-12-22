import { Routes } from '@angular/router';

export const routes: Routes = [
  // Who: Utilisateur
  // What: Redirection racine vers liste APIs
  // When: Accès à '/'
  // Where: Route racine
  // Why: Page d'accueil = liste APIs
  // Which: Redirection complète
  // How: redirectTo avec pathMatch full
  {
    path: '',
    redirectTo: '/apis',
    pathMatch: 'full',
  },

  // Who: Utilisateur
  // What: Liste des APIs
  // When: Accès à '/apis'
  // Where: ApiListComponent (lazy loaded)
  // Why: Page principale publique
  // Which: Composant standalone
  // How: loadComponent
  {
    path: 'apis',
    loadComponent: () =>
      import('./features/api-list/components/api-list.component').then(
        (m) => m.ApiListComponent
      ),
  },

  // Who: Utilisateur
  // What: Détail d'une API
  // When: Accès à '/apis/:id'
  // Where: ApiDetailModule (lazy loaded)
  // Why: Page détail avec onglets tutoriels
  // Which: Module complet
  // How: loadChildren (module, pas composant)
  {
    path: 'apis/:id',
    loadChildren: () =>
      import('./features/api-detail/api-detail-module').then(
        (m) => m.ApiDetailModule
      ),
  },

  // Who: Admin
  // What: Interface administration
  // When: Accès à '/admin'
  // Where: AdminModule (lazy loaded)
  // Why: CRUD des APIs
  // Which: Module protégé
  // How: loadChildren
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin-module').then((m) => m.AdminModule),
  },

  // Who: Utilisateur
  // What: Route 404
  // When: URL inexistante
  // Where: Wildcard route
  // Why: Gestion erreurs navigation
  // Which: Redirection vers /apis
  // How: path '**'
  {
    path: '**',
    redirectTo: '/apis',
  },
];
