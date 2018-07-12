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
  constructor(public navCtrl: NavController, public data: DataProvider) {}
 
  ionViewWillEnter()
  {
    this.currentDate = new Date().toDateString();
  }

  
  

}
