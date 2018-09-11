import { Storage } from '@ionic/storage';
import { Favourite } from './../../models/favourite';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'favouriteVerses';
@Injectable()
export class FavouriteProvider {

  constructor(public storage: Storage) {}

  isFavorite(favourite: Favourite) 
  {
    let favouriteId = favourite.id;
    return this.getAllFavoriteVerses()
    .then(result => 
      {
       return result && result.indexOf(favouriteId) !== -1;
      });
  }

  favoriteVerse(favourite: Favourite) 
  {
    let favouriteId = favourite.id;
    return this.getAllFavoriteVerses()
    .then(result => {
      if (result) {
        result.push(favouriteId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [favourite]);
      }
    });
  }

  unfavoriteVerse(favourite: Favourite) 
  {
    let favouriteId = favourite.id;
    return this.getAllFavoriteVerses()
    .then(result => {
      if (result) 
      {
        var index = result.findIndex(favourite => favourite.id == favouriteId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteVerses() 
  {
    return this.storage.get(STORAGE_KEY);
  }

  deleteAllFavourites

}
