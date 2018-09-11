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
  constructor(public navCtrl: NavController, public navParams: NavParams, private favouritesProvider: FavouriteProvider) {}

  ionViewDidLoad()
  {
  this.favouritesProvider.getAllFavoriteVerses()
  .then((favourites)=>
  {
    this.favourites = favourites;
  })
  }

}
