import { Component, OnInit } from '@angular/core';

import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favItems: any;
  favIds: any[];
  constructor(private favService: FavoriteService) { }

  ngOnInit() {
    this.favItems = this.favService.getAll();
    if (this.favItems) this.favIds = Object.keys(this.favItems);
  }

  removeFromFavorites = (id: string) => {
    this.favService.removeItem(id);
    this.favItems = this.favService.getAll();
    if (this.favItems) this.favIds = Object.keys(this.favItems);
  }

}
