import { BibleProvider } from './../bible/bible';
import { Storage } from '@ionic/storage';
import { Favourite } from './../../models/favourite';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'favouriteVerses';
@Injectable()
export class FavouriteProvider {

  constructor(public storage: Storage, private bibleProvider: BibleProvider) {}

  isFavorite(favourite: Favourite) 
  {
    let favouriteId = favourite.id;
    return this.getAllFavoriteVerses()
    .then(result => 
      {
        if(result)
        {
          let favourites = result;
          let index = favourites.findIndex(favourite => favourite.favouriteId == favouriteId);
          if(index != -1)
          {
            return true;
          }
        }
        return false;
      });
  }

  favoriteVerse(favourite: Favourite) 
  {
    return this.getAllFavoriteVerses()
    .then(result => {
      if (result) {
        result.push(favourite);
        this.bibleProvider.showToast("Added to favourites");
        return this.storage.set(STORAGE_KEY, result);
      } else {
        this.bibleProvider.showToast("Added to favourites");
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
        if(index != -1)
        {
          result.splice(index, 1);
          this.bibleProvider.showToast("Removed from favourites");
        }
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteVerses() 
  {
    return this.storage.get(STORAGE_KEY);
  }

  getFavouritesForBook(bookName: string)
  {
   return this.getAllFavoriteVerses()
    .then(favourites =>
      {
        let favouritesList = favourites;
        return favouritesList.filter(favourite => favourite.bookName == bookName);
      })
  }

  deleteAllFavourites()
  {
    this.storage.remove(STORAGE_KEY)
    .then(()=>
    {
      this.bibleProvider.showToast("Finished clearing favourites");
    })
  }

}
