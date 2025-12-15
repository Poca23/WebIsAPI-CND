// Who: Développeur frontend
// What: Configuration Transloco pour i18n
// When: Au bootstrap de l'app
// Where: src/app/transloco-root.module.ts
// Why: Support FR/EN avec changement dynamique
// Which: Fichiers de traduction dans assets/i18n/
// How: provideTransloco avec config

import { provideTransloco, TranslocoModule } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['fr', 'en'], // Langues disponibles
        defaultLang: 'fr', // Langue par défaut
        reRenderOnLangChange: true, // Re-render au changement
        prodMode: false, // Mode dev (logs activés)
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
