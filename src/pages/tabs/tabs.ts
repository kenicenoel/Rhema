import { ProfilePage } from './../profile/profile';
import { SpeakPage } from './../speak/speak';
import { BiblePage } from './../bible/bible';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { BibleProvider } from '../../providers/bible/bible';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage 
{

  homePage = HomePage;
  biblePage = BiblePage;
  speakPage = SpeakPage;
  profilePage = ProfilePage

  darkMode: boolean = false;
  constructor(private bibleProvider: BibleProvider)
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
  
}
