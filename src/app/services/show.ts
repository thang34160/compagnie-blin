import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ShowModel {
  _id?: string;
  id: string;
  src: string;
  title: string;
  description: string;
  status?: 'en-cours' | 'passes';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api/shows';

  // Récupérer tous les shows
  getAllShows(): Observable<ApiResponse<ShowModel[]>> {
    return this.http.get<ApiResponse<ShowModel[]>>(this.API_URL);
  }

  // Récupérer un show par ID
  getShowById(id: string): Observable<ApiResponse<ShowModel>> {
    return this.http.get<ApiResponse<ShowModel>>(`${this.API_URL}/${id}`);
  }

  // Créer un nouveau show
  createShow(show: ShowModel): Observable<ApiResponse<ShowModel>> {
    return this.http.post<ApiResponse<ShowModel>>(this.API_URL, show);
  }

  // Mettre à jour un show
  updateShow(id: string, show: ShowModel): Observable<ApiResponse<ShowModel>> {
    return this.http.put<ApiResponse<ShowModel>>(`${this.API_URL}/${id}`, show);
  }

  // Supprimer un show
  deleteShow(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.API_URL}/${id}`);
  }

  // Rechercher des shows
  searchShows(query: string): Observable<ApiResponse<ShowModel[]>> {
    return this.http.get<ApiResponse<ShowModel[]>>(`${this.API_URL}/search/${query}`);
  }
}
