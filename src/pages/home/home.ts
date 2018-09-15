import { Sermon } from './../../models/sermon';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
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
  sermonsList: Sermon[] = [
    {
      title: 'Greatness as a father',
      url: 'https://kenicenoel.com/files/auido/sermons/GreatnessAsAFather_2018-06-07.mp3',
      author: 'Temple of Deliverance'
    }
  ]
  currentDate: string;
  votd: DailyVerse = null;
  constructor(public navCtrl: NavController, public data: DataProvider, private streamer: StreamingMedia) {}
 
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

  
  startAudio(streamUrl: string) {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamer.playAudio(streamUrl, options);
  }
 
  stopAudio() {
    this.streamer.stopAudio();
  }

  viewFavourites()
  {
    this.navCtrl.setRoot(FavouritePage);
  }

 
  

}
