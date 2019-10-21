import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":type/:id",
    component: MovieDetailsComponent
  },
  {
    path: "favorites",
    component: FavoriteComponent
  },
  {
    path: "search/:search",
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
