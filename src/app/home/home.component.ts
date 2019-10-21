import { Component, OnInit } from '@angular/core';
import { AnchorComponent } from '../anchor/anchor.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
