import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = "https://api.themoviedb.org/3/";
  apiKey: string = "bbc9a3893d220424e802b3bb471cddd4";

  omdbApi: string = "https://www.omdbapi.com/?apikey=4ac858fc"

  constructor(private http: HttpClient) { }

  getTrending = () => {
    return this.http.get(this.baseUrl + 'trending/all/day?api_key=' + this.apiKey);
  }

  getPopularMovies = () => {
    return this.http.get(this.baseUrl + 'movie/popular?api_key=' + this.apiKey);
  }

  getPopularShows = () => {
    return this.http.get(this.baseUrl + 'tv/popular?api_key=' + this.apiKey);
  }

  getMovieDetails = (media_type: string, id: string) => {
    return this.http.get(this.baseUrl + `${media_type}/${id}?api_key=` + this.apiKey);
  }

  getOmdbDetails = (id: string) => {
    return this.http.get(this.omdbApi + `&i=${id}`);
  }

  search = (title: string) => {
    return this.http.get(this.baseUrl + `search/multi?query=${title}&api_key=` + this.apiKey);
  }
}
