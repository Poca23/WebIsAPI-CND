// Who: Développeur frontend
// What: Module Core pour services singleton
// When: Importé une seule fois dans AppComponent
// Where: src/app/core/core.module.ts
// Why: Centraliser les services globaux (API, Auth, etc.)
// Which: Services métier utilisés dans toute l'app
// How: NgModule avec providers vides (à remplir en Phase 2)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // Who: Développeur backend
    // What: Services singleton à ajouter en Phase 2
    // When: Au bootstrap de l'app
    // Where: Providers du CoreModule
    // Why: Une seule instance par service dans toute l'app
    // Which: ApiService, AuthService, ThemeService, etc.
    // How: Injection de dépendances Angular
  ],
})
export class CoreModule {}
