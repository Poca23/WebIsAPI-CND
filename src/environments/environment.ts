// src/environments/environment.ts

// Who: Développeur backend
// What: Configuration Firebase pour développement
// When: Utilisée en mode dev (ng serve)
// Where: src/environments/environment.ts
// Why: Variables Firebase pour connexion BaaS
// Which: Clés API Firebase du projet
// How: Export d'objet avec config Firebase Console

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCCmPkgFKpc3kCseqM2C8YY0U_zhC17yR4',
    authDomain: 'webisapi-cnd.firebaseapp.com',
    projectId: 'webisapi-cnd',
    storageBucket: 'webisapi-cnd.firebasestorage.app',
    messagingSenderId: '495951405850',
    appId: '1:495951405850:web:ff43f4db7d28cfe45442a3',
  },
};
