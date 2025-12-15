// Who: Développeur backend
// What: Initialisation Firebase dans Angular + Transloco
// When: Au démarrage de l'application
// Where: src/app/app.config.ts
// Why: Connecter Angular à Firebase et i18n
// Which: provideFirebaseApp, provideFirestore, provideAuth, provideTransloco
// How: Providers dans ApplicationConfig

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';
import { isDevMode } from '@angular/core'; // ✅ AJOUT

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

    // ✅ Configuration Transloco corrigée
    provideTransloco({
      config: {
        availableLangs: ['fr', 'en'],
        defaultLang: 'fr',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(), // ✅ Utilise isDevMode() au lieu de false
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
