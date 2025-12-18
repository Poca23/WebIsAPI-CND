import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ApiService } from '../../../core/services/api.service';
import { Api } from '../../../models/api.model';
import { ApiCardComponent } from './api-card.component';

@Component({
  selector: 'app-api-list',
  standalone: true,
  imports: [CommonModule, TranslocoModule, ApiCardComponent],
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
})
export class ApiListComponent implements OnInit {
  // ✅ FIX : Utiliser inject() au lieu de constructor
  private apiService = inject(ApiService);

  apis = signal<Api[]>([]);
  filteredApis = signal<Api[]>([]);
  categories = signal<string[]>([]);
  selectedCategory = signal<string>('all');
  showFavoritesOnly = signal<boolean>(false);
  sortBy = signal<'date' | 'name-asc' | 'name-desc'>('date');
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadApis();
  }

  private loadApis(): void {
    this.loading.set(true);
    this.error.set(null);

    this.apiService.getApis().subscribe({
      next: (apis) => {
        console.log('📦 APIs chargées:', apis);
        this.apis.set(apis);
        this.extractCategories(apis);
        this.applyFilters();
        this.loading.set(false);
      },
      error: (err) => {
        console.error('❌ Erreur:', err);
        this.error.set('Erreur de chargement');
        this.loading.set(false);
      },
    });
  }

  private extractCategories(apis: Api[]): void {
    const unique = [...new Set(apis.map((api) => api.category))];
    this.categories.set(unique.sort());
  }

  applyFilters(): void {
    let result = [...this.apis()];

    if (this.selectedCategory() !== 'all') {
      result = result.filter((api) => api.category === this.selectedCategory());
    }

    if (this.showFavoritesOnly()) {
      const favorites = this.getFavorites();
      result = result.filter((api) => favorites.includes(api.id));
    }

    result = this.sortApis(result);
    this.filteredApis.set(result);
  }

  private sortApis(apis: Api[]): Api[] {
    const mode = this.sortBy();
    return apis.sort((a, b) => {
      if (mode === 'name-asc') return a.name.localeCompare(b.name);
      if (mode === 'name-desc') return b.name.localeCompare(a.name);
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.applyFilters();
  }

  toggleFavorites(): void {
    this.showFavoritesOnly.set(!this.showFavoritesOnly());
    this.applyFilters();
  }

  changeSortBy(mode: 'date' | 'name-asc' | 'name-desc'): void {
    this.sortBy.set(mode);
    this.applyFilters();
  }

  resetFilters(): void {
    this.selectedCategory.set('all');
    this.showFavoritesOnly.set(false);
    this.sortBy.set('date');
    this.applyFilters();
  }

  private getFavorites(): string[] {
    const stored = localStorage.getItem('api-favorites');
    return stored ? JSON.parse(stored) : [];
  }
}
