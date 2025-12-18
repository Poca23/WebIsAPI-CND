// src/app/models/api.model.ts
export interface Api {
  id: string;
  name: string;
  category: string;
  description: string;
  documentation: string;
  tutorials: {
    windows: string;
    mac: string;
    linux: string;
  };
  links: Array<{ label: string; url: string }>;
  views: number;
  createdAt: string;
  updatedAt: string;
}
// src/app/models/api.model.ts

// Who: Développeurs frontend + backend
// What: Interface définissant la structure complète d'une API
// When: Utilisée dans tous les composants et services manipulant des APIs
// Where: Importée partout (services, composants, formulaires)
// Why: Typage TypeScript strict pour sécurité et maintenabilité
// Which: Contrat de données entre Firestore et Angular
// How: Interface TypeScript avec tous les champs obligatoires

export interface Api {
  // ID unique généré automatiquement par Firestore
  id: string;

  // Nom de l'API (ex: "OpenWeather API")
  // Type: string
  // Requis: Oui
  // Validation: Min 3 caractères, max 100
  name: string;

  // Catégorie de l'API (ex: "Météo", "Paiement", "Géolocalisation")
  // Type: string
  // Requis: Oui
  // Validation: Liste prédéfinie dans le formulaire admin
  category: string;

  // Description courte de l'API
  // Type: string
  // Requis: Oui
  // Validation: Min 20 caractères, max 500
  description: string;

  // URL vers la documentation officielle
  // Type: string (URL)
  // Requis: Oui
  // Validation: Format URL valide (https://)
  documentation: string;

  // Tutoriels par système d'exploitation (contenu HTML formaté avec Quill)
  // Type: objet avec 3 propriétés string
  // Requis: Oui (les 3 OS)
  // Validation: HTML valide (sanitisé côté serveur)
  tutorials: {
    windows: string; // HTML du tutoriel Windows
    mac: string; // HTML du tutoriel macOS
    linux: string; // HTML du tutoriel Linux
  };

  // Liens externes supplémentaires (GitHub, exemples, outils, etc.)
  // Type: tableau d'objets {label, url}
  // Requis: Non (peut être vide)
  // Validation: Chaque URL doit être valide
  links: Array<{
    label: string; // Texte du lien (ex: "Code source GitHub")
    url: string; // URL complète (ex: "https://github.com/...")
  }>;

  // Compteur de consultations (pour statistiques)
  // Type: number
  // Requis: Oui (initialisé à 0)
  // Validation: Entier positif uniquement
  views: number;

  // Date de création (format ISO 8601)
  // Type: string
  // Requis: Oui (généré automatiquement)
  // Format: "2024-12-15T10:30:00.000Z"
  createdAt: string;

  // Date de dernière modification (format ISO 8601)
  // Type: string
  // Requis: Oui (mis à jour automatiquement)
  // Format: "2024-12-15T14:45:00.000Z"
  updatedAt: string;
}
