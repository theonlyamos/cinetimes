import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { favorite } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  addItem = (item: favorite) => {
    let favs: any = {}
    if (sessionStorage.getItem("favorites") == null){
      favs[item.id] = item;
      sessionStorage.setItem("favorites", JSON.stringify(favs));
    }
    else {
      favs = sessionStorage.getItem("favorites");
      if (favs.length){
        favs = JSON.parse(favs);
        if (!favs.hasOwnProperty(item.id)){
          favs[item.id] = item;
          sessionStorage.setItem("favorites", JSON.stringify(favs));
        }
      }
      else {
        favs[item.id] = item;
        sessionStorage.setItem("favorites", JSON.stringify(favs));
      }
    }
  }

  getItem(id: string): favorite {
    let favs = sessionStorage.getItem("favorites");
    favs = JSON.parse(favs);
    return favs[id];
  }

  isFavorite(id: string): boolean {
    let favs: any = {};
    if (sessionStorage.getItem("favorites") == null){
      return false
    }
    else {
      favs = sessionStorage.getItem("favorites")
      if (favs.length){
        favs = JSON.parse(favs);
        if (favs.hasOwnProperty(id)){
          return true;
        }
      }
      return false
    }
  }

  getAll(): Object {
    let favs = sessionStorage.getItem("favorites");
    return JSON.parse(favs);
  }

  removeItem = (id: string) => {
    let favs: any = {}
    favs = sessionStorage.getItem("favorites");

    favs = JSON.parse(favs)
    if (favs.hasOwnProperty(id)){
      delete favs[id]
      sessionStorage.setItem("favorites", JSON.stringify(favs));
    }

  }
}
