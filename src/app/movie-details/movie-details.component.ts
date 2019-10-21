import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie/movie.service';
import { FavoriteService } from '../favorite/favorite.service';

import { favorite } from '../shared';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @ViewChild("bgImage", {static: false}) blurBg: any;

  movieId: string = "";
  mediaType: string = "";
  poster: any = {};
  image: string = "";
  imageApi: string = "https://image.tmdb.org/t/p/w500";
  movieDetails: any = {};

  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private favService: FavoriteService) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("id");
    this.mediaType = this.route.snapshot.paramMap.get("type");

    this.isFavorite = this.favService.isFavorite(this.movieId);

    this.movieService.getMovieDetails(this.mediaType, this.movieId).subscribe((data: any) => {
      if (data){
        console.log(data);
        this.poster = data;
        this.image = this.imageApi + this.poster.poster_path;

        this.blurBg.nativeElement.style.backgroundImage = `url(${this.imageApi + this.poster.backdrop_path})`;
        this.blurBg.nativeElement.style.backgroundPosition = "center";
        this.blurBg.nativeElement.style.backgroundRepeat = "no-repeat";
        this.blurBg.nativeElement.style.backgroundSize = "cover";

        if (this.poster.hasOwnProperty("imdb_id")){
          this.movieService.getOmdbDetails(this.poster.imdb_id).subscribe((details: any) => {
            if (details){
              console.log(details)
              this.movieDetails = details;
            }
          })
        }
      }
    })
  }

  addToFavorites = () => {
    let favItem: favorite;
    if (this.mediaType === 'tv'){
      favItem = {id: this.movieId, name: this.poster.name, poster_path: this.image, media_type: this.mediaType};
    }
    else {
      favItem = {id: this.movieId, name: this.poster.title, poster_path: this.image, media_type: this.mediaType};
    }

    this.favService.addItem(favItem);
    this.isFavorite = this.favService.isFavorite(this.movieId);
  }

}
