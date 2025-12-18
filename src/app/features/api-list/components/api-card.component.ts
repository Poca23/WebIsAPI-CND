// Who: Utilisateurs publics
// What: Carte individuelle d'une API
// When: Affichage dans la grille ApiList
// Where: Composant enfant de ApiListComponent
// Why: Présentation visuelle d'une API
// Which: Données d'une API unique
// How: @Input() api + RouterLink vers détail

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Api } from '../../../models/api.model';

@Component({
  selector: 'app-api-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule],
  template: `
    <article
      class="bg-light-surface dark:bg-dark-surface rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-light-primary/20"
    >
      <!-- Header avec catégorie -->
      <header
        class="bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary p-4"
      >
        <span
          class="inline-block px-3 py-1 bg-white/20 rounded-full text-sm text-white font-medium"
        >
          {{ api.category }}
        </span>
      </header>

      <!-- Corps de la carte -->
      <div class="p-6">
        <h3 class="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
          {{ api.name }}
        </h3>

        <p class="text-light-text/70 dark:text-dark-text/70 mb-4 line-clamp-3">
          {{ api.description }}
        </p>

        <!-- Statistiques -->
        <div class="flex items-center gap-4 text-sm text-light-text/60 dark:text-dark-text/60 mb-4">
          <span class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ api.views }} {{ 'apiCard.views' | transloco }}
          </span>
        </div>

        <!-- Actions -->
        <div class="flex gap-3">
          <a
            [routerLink]="['/apis', api.id]"
            class="flex-1 bg-light-primary dark:bg-dark-primary text-white text-center py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            {{ 'apiCard.viewDetails' | transloco }}
          </a>

          <button
            (click)="toggleFavorite()"
            [class.text-yellow-500]="isFavorite()"
            class="p-2 border border-light-primary rounded-lg hover:bg-light-primary/10 transition-colors"
          >
            <span class="text-2xl">{{ isFavorite() ? '⭐' : '☆' }}</span>
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      /* Animation au hover */
      article {
        transition: transform 0.2s ease;
      }
      article:hover {
        transform: translateY(-4px);
      }

      /* Limitation de lignes pour description */
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class ApiCardComponent {
  @Input({ required: true }) api!: Api;

  /**
   * Who: Utilisateur
   * What: Toggle l'état favori d'une API
   * When: Clic sur le bouton étoile
   * Where: Event handler
   * Why: Gérer les favoris utilisateur
   * Which: API actuelle
   * How: localStorage avec tableau d'IDs
   */
  toggleFavorite(): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(this.api.id);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(this.api.id);
    }

    localStorage.setItem('api-favorites', JSON.stringify(favorites));
  }

  /**
   * Who: ApiCardComponent
   * What: Vérifie si l'API est en favori
   * When: Au rendu et après toggle
   * Where: Template pour affichage conditionnel
   * Why: Afficher l'état visuel du favori
   * Which: API actuelle
   * How: Recherche dans localStorage
   */
  isFavorite(): boolean {
    return this.getFavorites().includes(this.api.id);
  }

  /**
   * Who: ApiCardComponent
   * What: Récupère les favoris depuis localStorage
   * When: À chaque vérification de favori
   * Where: Méthode privée utilitaire
   * Why: Accès centralisé aux favoris
   * Which: Clé 'api-favorites'
   * How: Parse JSON avec fallback
   */
  private getFavorites(): string[] {
    const stored = localStorage.getItem('api-favorites');
    return stored ? JSON.parse(stored) : [];
  }
}
