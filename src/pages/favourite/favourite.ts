import { BibleProvider } from './../../providers/bible/bible';
import { FavouriteProvider } from './../../providers/favourite/favourite';
import { Favourite } from './../../models/favourite';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})

export class FavouritePage {

  favourites: Favourite[] = [];
  darkMode: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private favouritesProvider: FavouriteProvider, private bibleProvider: BibleProvider) {}

  ionViewWillEnter()
  {
    this.getDarkModeEnabled();
  }

  getDarkModeEnabled()
  {
    this.bibleProvider.getDarkModeEnabled()
    .then(status =>
      {
        this.darkMode = status == 'enabled' ? true : false;

      });
  }

  ionViewDidLoad()
  {
    this.getFavourites();
  }

  getFavourites()
  {
    this.favouritesProvider.getFavourites();
  }

  unfavourite(favourite: Favourite)
  {
    this.favouritesProvider.removeFromFavourites(favourite);
    this.navCtrl.setRoot(FavouritePage);
  }

}
