import { Storage } from '@ionic/storage';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { FavouritePage } from './../favourite/favourite';
import { RandomScripture } from '../../models/random-scripture';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BibleProvider } from '../../providers/bible/bible';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  public booksAnimationConfig: Object;
  currentDate: string;
  votd: RandomScripture;
  dailyBibleVerse: BehaviorSubject<RandomScripture> = new BehaviorSubject<RandomScripture>(null);
  private anim: any;
  darkMode: boolean;
  recentlyReadBooks: string[] = [];
  constructor(public navCtrl: NavController, public bibleProvider: BibleProvider, private streamer: StreamingMedia, private storage: Storage)
  {
    this.booksAnimationConfig = this.bibleProvider.getAnimation("books", false);
  }

  ionViewWillEnter()
  {
    this.getDarkModeEnabled();
    this.recentlyReadBooks = this.bibleProvider.getRecentlyReadBooks();
  }

  getDarkModeEnabled()
  {
    this.bibleProvider.getDarkModeEnabled()
    .then(status =>
      {
        this.darkMode = status == 'enabled' ? true : false;

      });
  }

  ionViewDidEnter()
  {
    this.currentDate = new Date().toDateString();
    this.loadDailyVerse();
   
  }




  loadDailyVerse()
  {
    this.generateRandomVerse();
  }

  // getDailyVerse()
  // {
  //   this.storage.get('votd')
  //     .then((votd) => 
  //     {
  //       if (votd.data || votd.data != undefined)
  //       {
  //         if (Date.now() > votd.expires)
  //         {
  //           this.generateRandomVerse();
  //         }
  //         else
  //         {
  //           console.log(votd.data);

  //           this.votd = votd;
  //         }
  //       }
  //       else
  //       {
  //         this.generateRandomVerse();
  //       }

  //     });
  // }

  generateRandomVerse()
  {
     this.bibleProvider.getBibleBook()
      .subscribe(bookText =>
      {
        let randomTextIndex = Math.floor((Math.random() * bookText.length) + 1);
        let randomVerse = bookText[randomTextIndex];
        let dailyVerse: RandomScripture =
        {
          scripture: randomVerse,
          expires: Date.now() + (60 * 60 * 1000) * 24
        }

        this.storage.set('votd', dailyVerse);
        this.votd = dailyVerse;
        this.dailyBibleVerse.next(dailyVerse);
      });


  }


  startAudio(streamUrl: string)
  {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };

    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamer.playAudio(streamUrl, options);
  }

  stopAudio()
  {
    this.streamer.stopAudio();
  }

  viewFavourites()
  {
    this.navCtrl.setRoot(FavouritePage);
  }

//#region Animation related stuff
  
  handleAnimation(anim: any) 
  {
    this.anim = anim;
  }
  //#endregion


}
