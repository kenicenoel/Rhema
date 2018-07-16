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
  votd: DailyVerse;

  constructor(public navCtrl: NavController, public data: DataProvider) {}
 
  ionViewWillEnter()
  {
    this.currentDate = new Date().toDateString();
    this.getVotd();
  }


  async getVotd()
  {
    // this.votd = await this.data.generateDailyVerse();
    console.log(this.votd);
    
  }

  
  

}
