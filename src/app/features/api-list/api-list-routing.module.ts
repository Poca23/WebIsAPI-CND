// Who: Développeur frontend
// What: Routes du module api-list
// When: Navigation vers la liste des APIs
// Where: src/app/features/api-list/api-list-routing.module.ts
// Why: Lazy loading du module
// Which: Route '/apis' vers ApiListComponent
// How: RouterModule.forChild avec routes array

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Who: Utilisateur
  // What: Route vers la liste des APIs
  // When: Accès à /apis
  // Where: Composant ApiListComponent (à créer en Phase 3)
  // Why: Afficher toutes les APIs avec filtres
  // Which: Chemin vide (route par défaut du module)
  // How: loadComponent avec import dynamique
  // { path: '', component: ApiListComponent } // À décommenter en Phase 3
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiListRoutingModule {}
