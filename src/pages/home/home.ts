import { FavouritePage } from './../favourite/favourite';
import { DailyVerse } from './../../models/daily-verse';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

  currentDate: string;
  votd: DailyVerse = null;
  constructor(public navCtrl: NavController, public data: DataProvider) {}
 
  ionViewDidEnter()
  {
    this.currentDate = new Date().toDateString();
    this.loadDailyVerse();
  }


  loadDailyVerse()
  {
    this.data.dailyBibleVerse
    .subscribe(data =>
    {
      this.votd = data;
      console.log(this.votd);
      
    })
  }

  viewFavourites()
  {
    this.navCtrl.push(FavouritePage);
  }

 
  

}
