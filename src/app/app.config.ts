// Who: Développeur backend
// What: Initialisation Firebase dans Angular
// When: Au démarrage de l'application
// Where: src/app/app.config.ts
// Why: Connecter Angular à Firebase
// Which: provideFirebaseApp, provideFirestore, provideAuth
// How: Providers dans ApplicationConfig

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Who: Développeur backend
    // What: Initialisation Firebase App
    // When: Au bootstrap de l'app
    // Where: Root providers
    // Why: Connexion au projet Firebase
    // Which: Configuration depuis environment.ts
    // How: initializeApp avec config object
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // Who: Développeur backend
    // What: Initialisation Firestore
    // When: Après init Firebase App
    // Where: Root providers
    // Why: Accès à la base de données NoSQL
    // Which: Instance Firestore par défaut
    // How: getFirestore() sans paramètres
    provideFirestore(() => getFirestore()),

    // Who: Développeur backend
    // What: Initialisation Firebase Auth
    // When: Après init Firebase App
    // Where: Root providers
    // Why: Gestion authentification admin
    // Which: Instance Auth par défaut
    // How: getAuth() sans paramètres
    provideAuth(() => getAuth()),
  ],
};
