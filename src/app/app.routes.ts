// Who: Développeur frontend
// What: Routes principales de l'application
// When: Navigation globale
// Where: src/app/app.routes.ts
// Why: Routing avec lazy loading des modules
// Which: Routes home, apis, admin
// How: loadChildren avec import dynamique

import { Routes } from '@angular/router';

export const routes: Routes = [
  // Who: Utilisateur
  // What: Route par défaut (page d'accueil)
  // When: Accès à /
  // Where: Composant AppComponent
  // Why: Landing page de l'application
  // Which: Redirection vers /apis
  // How: redirectTo avec pathMatch full
  {
    path: '',
    redirectTo: '/apis',
    pathMatch: 'full',
  },

  // Who: Utilisateur
  // What: Module liste des APIs
  // When: Accès à /apis
  // Where: ApiListModule (lazy loaded)
  // Why: Afficher la bibliothèque d'APIs
  // Which: Tout le module api-list
  // How: loadChildren avec import dynamique
  {
    path: 'apis',
    loadChildren: () =>
      import('./features/api-list/api-list-module.js').then((m) => m.ApiListModule),
  },

  // Who: Utilisateur
  // What: Module détail d'une API
  // When: Accès à /api/:id
  // Where: ApiDetailModule (lazy loaded)
  // Why: Afficher les détails d'une API spécifique
  // Which: Tout le module api-detail
  // How: loadChildren avec paramètre :id
  {
    path: 'api/:id',
    loadChildren: () =>
      import('./features/api-detail/api-detail-module.js').then((m) => m.ApiDetailModule),
  },

  // Who: Admin
  // What: Module administration
  // When: Accès à /admin
  // Where: AdminModule (lazy loaded)
  // Why: CRUD des APIs
  // Which: Tout le module admin (protégé par guard en Phase 9)
  // How: loadChildren avec guard (à ajouter en Phase 9)
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin-module.js').then((m) => m.AdminModule),
    // canActivate: [AdminGuard] // À ajouter en Phase 9
  },

  // Who: Utilisateur
  // What: Route 404 (page non trouvée)
  // When: Accès à une URL inexistante
  // Where: Wildcard route
  // Why: Gérer les erreurs de navigation
  // Which: Redirection vers /apis
  // How: path '**' (capture tout)
  {
    path: '**',
    redirectTo: '/apis',
  },
];
