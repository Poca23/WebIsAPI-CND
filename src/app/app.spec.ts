import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { provideTransloco, TranslocoLoader } from '@ngneat/transloco';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
class MockTranslocoLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<any> {
    return of({
      'nav.home': 'Accueil',
      'nav.apis': 'APIs',
      'nav.login': 'Connexion',
    });
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideTransloco({
          config: {
            availableLangs: ['fr', 'en'],
            defaultLang: 'fr',
            reRenderOnLangChange: true,
            prodMode: true,
          },
          loader: MockTranslocoLoader,
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Claire');
  });
});
