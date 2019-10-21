import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { FavoriteService } from '../favorite/favorite.service';

import { favorite } from '../shared';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @ViewChild("bgImage", {static: false}) blurBg: any;

  popularMovies: any = [];
  popularShows: any = [];
  imageApi: string = "https://image.tmdb.org/t/p/w500";
  constructor(private movie: MovieService, private favService: FavoriteService) { }

  ngOnInit() {
    this.movie.getPopularMovies().subscribe((data: any) => {
      if (data){
        this.popularMovies = data.results;
      }
    })
    this.movie.getPopularShows().subscribe((data: any) => {
      if (data){
        this.popularShows = data.results;
      }
    })
  }

  addToFavorites = (item: any, mediaType: string) => {
    let favItem: favorite;
    favItem = {id: item.id, name: item.title, poster_path: this.imageApi + item.poster_path, media_type: mediaType};
    this.favService.addItem(favItem);
  }

  isFavorite = (id: string) => {
    return this.favService.isFavorite(id)
  }

}
