import { BibleProvider } from './../bible/bible';
import { Storage } from '@ionic/storage';
import { Favourite } from './../../models/favourite';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'favouriteVerses';
@Injectable()
export class FavouriteProvider
{


  constructor(public storage: Storage, private bibleProvider: BibleProvider)
  {
  }

  // private getAll() 
  // {
  //   this.storage.get(STORAGE_KEY)
  //     .then((favourites: Favourite[]) => this.favouritesList = favourites || []);
  // }

  // getFavourites = () => this.favouritesList || [];

  // isFavorite(favourite: Favourite) 
  // {
  //   // if (this.favouritesList.length == 0)
  //   // {
  //   //   return false;
  //   // }
  //   let indexResult = this.favouritesList.findIndex(fav =>  fav.scripture.text == favourite.scripture.text && fav.scripture.book_name == favourite.scripture.book_name);
  //   if (indexResult != -1) { return true; }
  //   return false;
  // }

  // addToFavourites(favourite: Favourite) 
  // {
  //   if (!this.isFavorite(favourite))
  //   {
  //     this.favouritesList.push(favourite);
  //     this.storage.set(STORAGE_KEY, this.favouritesList);
  //     this.bibleProvider.showToast("Added to favourites");
  //   }
  // }

  // removeFromFavourites(favourite: Favourite) 
  // {
  //   let indexResult = this.favouritesList.findIndex(fav => fav.isSame(favourite));
  //   if (indexResult != -1)
  //   {
  //     this.favouritesList.splice(indexResult, 1);
  //     this.storage.set(STORAGE_KEY, this.favouritesList);
  //   }
  // }

  // getFavouritesByBookName = (bookName: string) => this.favouritesList.filter(favourite => favourite.scripture.book_name == bookName);

  // deleteAll = () => this.storage.remove(STORAGE_KEY);

}
