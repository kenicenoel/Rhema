import { ProfilePage } from './../profile/profile';
import { SpeakPage } from './../speak/speak';
import { BiblePage } from './../bible/bible';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';


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
  
}
