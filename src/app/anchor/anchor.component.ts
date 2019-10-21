import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @ViewChild("bgImage", {static: false}) blurBg: any;

  trending: any = {};
  imageApi: string = "https://image.tmdb.org/t/p/w500";
  constructor(private movie: MovieService) { }

  ngOnInit() {
    this.movie.getTrending().subscribe((data: any) => {
      if (data){
        this.trending = data.results.slice(0,7);
      }
    })
  }

}
