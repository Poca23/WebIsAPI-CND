// Who: Développeur frontend
// What: Loader HTTP pour Transloco
// When: Au chargement des traductions
// Where: src/app/transloco-loader.ts
// Why: Charger les fichiers JSON de traduction depuis assets/i18n/
// Which: HttpClient pour récupérer fr.json et en.json
// How: Injectable provider avec Translation interface

import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  // Who: Développeur frontend
  // What: Méthode de chargement des traductions
  // When: Appelée par Transloco au changement de langue
  // Where: Depuis assets/i18n/{lang}.json
  // Why: Fournir les traductions à l'application
  // Which: Observable<Translation>
  // How: HTTP GET sur le fichier JSON correspondant
  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
