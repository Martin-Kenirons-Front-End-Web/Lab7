// Importing necessary Angular modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Injectable decorator to make this service available for dependency injection
@Injectable({
  providedIn: 'root' // This service is provided at the root level, making it a singleton
})
export class MovieService {

  // Constructor to inject the HttpClient dependency
  constructor(private httpClient: HttpClient) { }

  // Method to fetch movie data from the OMDB API
  getMovieData(): Observable<any> {
    // Returns an observable containing the API response
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');
  }
}
