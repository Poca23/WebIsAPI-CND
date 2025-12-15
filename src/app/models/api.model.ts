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
