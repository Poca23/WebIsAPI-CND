// Who: Développeur frontend
// What: Module Shared pour composants réutilisables
// When: Importé dans tous les feature modules
// Where: src/app/shared/shared.module.ts
// Why: Mutualiser composants communs (modal, tabs, etc.)
// Which: Composants UI génériques
// How: NgModule avec declarations et exports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Who: Développeur frontend
    // What: Composants partagés à ajouter en Phase 3+
    // When: Lors de la création des composants
    // Where: Declarations du SharedModule
    // Why: Réutilisation dans plusieurs modules
    // Which: ModalComponent, TabsComponent, CopyButtonComponent, etc.
    // How: ng generate component dans shared/components/
  ],
  imports: [CommonModule],
  exports: [
    // Who: Développeur frontend
    // What: Export des composants pour utilisation externe
    // When: Importation du SharedModule dans d'autres modules
    // Where: Exports du SharedModule
    // Why: Rendre les composants accessibles
    // Which: Tous les composants déclarés ci-dessus
    // How: Ajout dans le tableau exports
  ],
})
export class SharedModule {}
