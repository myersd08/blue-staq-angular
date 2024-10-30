import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { Poem } from '../models/poem';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {
  private readonly baseUrl = 'https://poetrydb.org';

  constructor(private http: HttpClient) {}

  getRandomPoem(): Observable<Poem> {
    return this.http.get<Poem[]>(`${this.baseUrl}/random`).pipe(
      map(poems => poems[0]),
      catchError(() => throwError(() => new Error('Failed to fetch random poem')))
    );
  }

  getPoemsByAuthor(author: string): Observable<Poem[]> {
    const encodedAuthor = encodeURIComponent(author);
    return this.http.get<Poem[]>(`${this.baseUrl}/author/${encodedAuthor}`).pipe(
      catchError(() => throwError(() => new Error(`Failed to fetch poems by author: ${author}`)))
    );
  }

  searchPoems(title: string): Observable<Poem[]> {
    const encodedTitle = encodeURIComponent(title);
    return this.http.get<Poem[]>(`${this.baseUrl}/title/${encodedTitle}`).pipe(
      catchError(() => throwError(() => new Error(`Failed to search poems with title: ${title}`)))
    );
  }
} 