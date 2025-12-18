// Who: Développeur
// What: Module de la fonctionnalité Liste des APIs
// When: Lazy loading depuis app.routes.ts
// Where: features/api-list/
// Why: Organisation modulaire de l'app
// Which: Composants ApiList + ApiCard
// How: NgModule standalone components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './components/api-list.component';

const routes: Routes = [
  {
    path: '',
    component: ApiListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ApiListComponent],
})
export class ApiListModule {}
