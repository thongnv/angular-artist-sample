import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artistsUrl = 'api/artists';

  constructor(
    private http: HttpClient
  ) { }

  getArtists (): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
      .pipe(
        catchError(this.handleError('getArtists', []))
      );
  }

  getArtist(id: number): Observable<Artist> {
    const url = `${this.artistsUrl}/${id}`;
    return this.http.get<Artist>(url).pipe(
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }

  deleteSong(artist: Artist, songName: string) {
  //
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
