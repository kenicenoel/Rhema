import { BibleProvider } from './../../providers/bible/bible';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  darkMode: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private bibleProvider: BibleProvider) {}

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
 
  }

  toggleDarkMode()
  {
    let darkModeEnabled = this.darkMode ? 'enabled' : 'disabled';
    this.storage.set('darkMode', darkModeEnabled)
      .then(() =>
      {
        this.bibleProvider.showToast("You might need to restart the app to apply changes everywhere");
    })
  }

}
