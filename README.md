# 📚 WebIsAPI-CND - Bibliothèque d'APIs

## 🎯 Description

Application web Angular de bibliothèque interactive d'APIs avec interface publique et administration sécurisée.

## 🛠️ Stack Technique

- **Frontend** : Angular 21 + TypeScript
- **CSS** : TailwindCSS v3
- **Backend** : Firebase (Firestore + Auth + Hosting)
- **i18n** : @ngneat/transloco
- **Éditeur** : ngx-quill

## 🚀 Installation

### Prérequis

- Node.js >= 18
- npm >= 9
- Angular CLI 21
- Firebase CLI

### Étapes

```bash
# 1. Cloner le repository
git clone https://github.com/VOTRE_USERNAME/WebIsAPI-CND.git
cd WebIsAPI-CND

# 2. Installer les dépendances
npm install

# 3. Configurer Firebase
# Créer src/environments/environment.ts à partir de environment.template.ts
# Remplir les clés API Firebase (voir Firebase Console)

# 4. Lancer le serveur de développement
ng serve
# Application disponible sur http://localhost:4200
```

📁 Structure du Projet
src/app/
├── core/ # Services singleton (API, Auth, Theme, etc.)
├── shared/ # Composants réutilisables (Modal, Tabs, etc.)
├── features/ # Modules métier
│ ├── api-list/ # Liste des APIs avec filtres
│ ├── api-detail/ # Détail d'une API
│ └── admin/ # Interface d'administration
└── models/ # Interfaces TypeScript

📱 Fonctionnalités
Publiques

✅ Liste des APIs avec filtres (catégorie, favoris)
✅ Tri (date, A-Z, Z-A)
✅ Page détail avec 3 onglets tutoriels (Windows/Mac/Linux)
✅ Favoris et historique (3 dernières APIs)
✅ Statistiques (APIs les plus populaires)
✅ i18n (Français/Anglais)
✅ 3 thèmes (Dark/Light/Daltonien)

Administration (protégée)

✅ Authentification Firebase
✅ CRUD complet sur les APIs
✅ Éditeur WYSIWYG pour tutoriels
✅ Validation des formulaires

🔧 Scripts npm
npm start # Lancer le serveur de dev
npm run build # Build de production
npm test # Lancer les tests unitaires
npm run lint # Linter le code
🌐 Déploiement

# Build production

ng build --configuration production

# Déployer sur Firebase Hosting

firebase deploy
📝 Documentation

Feuille de route
Guide de contribution

👥 Auteurs

Naudin Claire - CND - Web Is Yours
📄 Licence
MIT License

Date de création : Décembre 2025
Version : 0.1.0
