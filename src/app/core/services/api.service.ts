// src/app/core/services/api.service.ts

import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  increment,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Api } from '../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private firestore = inject(Firestore);

  getApis(): Observable<Api[]> {
    const apisCollection = collection(this.firestore, 'apis');
    return collectionData(apisCollection, { idField: 'id' }) as Observable<Api[]>;
  }

  getApiById(id: string): Observable<Api> {
    const apiDoc = doc(this.firestore, `apis/${id}`);
    return docData(apiDoc, { idField: 'id' }) as Observable<Api>;
  }

  async createApi(api: Omit<Api, 'id'>): Promise<void> {
    const apisCollection = collection(this.firestore, 'apis');
    const now = new Date().toISOString();

    await addDoc(apisCollection, {
      ...api,
      views: 0,
      createdAt: now,
      updatedAt: now,
    });
  }

  async updateApi(id: string, api: Partial<Api>): Promise<void> {
    const apiDoc = doc(this.firestore, `apis/${id}`);
    await updateDoc(apiDoc, {
      ...api,
      updatedAt: new Date().toISOString(),
    });
  }

  async deleteApi(id: string): Promise<void> {
    const apiDoc = doc(this.firestore, `apis/${id}`);
    await deleteDoc(apiDoc);
  }

  async incrementViews(id: string): Promise<void> {
    const apiDoc = doc(this.firestore, `apis/${id}`);
    await updateDoc(apiDoc, { views: increment(1) });
  }
}
