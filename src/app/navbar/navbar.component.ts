import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("resultsBar", {static: false}) resultsBar: any;

  search: any;
  searchResults: any;
  imageApi: string = "https://image.tmdb.org/t/p/w500";

  constructor(private movies: MovieService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit = (form: NgForm) => {
    if (form.valid){
      this.movies.search(this.search).subscribe((data: any) => {
        if (data){
          this.searchResults = data.results
        }
      })
    }
  }

  clearResults = () => {
    this.searchResults = [];
    this.resultsBar.nativeElement.style.display = "none";
  }

}
