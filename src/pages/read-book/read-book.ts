import { Storage } from '@ionic/storage';
import { BibleProvider } from './../../providers/bible/bible';
import { Favourite } from './../../models/favourite';
import { FavouriteProvider } from './../../providers/favourite/favourite';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController, Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ReadOptionsPopOverPage } from '../read-options-pop-over/read-options-pop-over';

@Component({
  selector: 'page-read-book',
  templateUrl: 'read-book.html',
})
export class ReadBookPage
{

  bookName: string;
  selectedBook: BibleBook[];
  showMenu: boolean = false;
  showFooterMenu: boolean = false;
  chapter: number = -1;
  verse: number = 0;
  light: boolean = true;
  isPlayingAudio: boolean = false;
  isLoading: boolean = true;
  ttsOptions: any = {
    text: 'This feature is not ready yet.',
    rate: 1,
    locale: 'en-US'
  }
  favourites: Favourite[] = [];
  loadingAnimationConfig: Object;
  private anim: any;
  darkMode: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bibleProvider: BibleProvider,
    private tts: TextToSpeech, private popoverCtrl: PopoverController, private clipboard: Clipboard,
    private alertCtrl: AlertController, private socialSharing: SocialSharing, public favouriteProvider: FavouriteProvider,
    private platform: Platform, private storage: Storage)
  {
    this.bookName = navParams.get('book');
    this.loadingAnimationConfig = this.bibleProvider.getAnimation("loading", true);
  }

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
    this.selectedBook = null;
    this.getBookData();
  }

  ionViewWillLeave()
  {
    this.bibleProvider.saveBookToRecentlyRead(this.bookName);
  }

  getBookData()
  {
    this.bibleProvider.getBibleBook()
      .subscribe(bibleText => 
      {
        let filteredBookText = bibleText.filter(text => text.book_name == this.bookName);
        this.selectedBook = filteredBookText;
        this.isLoading = false;
      },
        error => console.log(error)
      )
  }

  getBookFavourites()
  {
    this.favouriteProvider.getFavouritesForBook(this.bookName)
      .then(favourites =>
      {
        this.favourites = favourites;
      })
  }

  toggleMenu()
  {
    this.showMenu = !this.showMenu;
  }

  get chapterInt()
  {
    return this.chapter;
  }


  get filteredChapters()
  {
    return this.selectedBook.filter(passage => passage.chapter == this.chapter);
  }


  returnToBooks()
  {
    this.navCtrl.pop();
  }

  toggleReadAloud() 
  {
    if (this.platform.is("cordova"))
    {
      if (this.isPlayingAudio) 
      {
        this.tts.stop();
        this.isPlayingAudio = false;
      }
      else
      {
        this.playAudio();
      }
    }

  }

  playAudio()
  {
    let speechText = [];

    if (this.chapter == -1)
    {
      speechText.push("Now reading " + this.bookName);
      this.selectedBook.forEach(passage =>
      {
        speechText.push(passage.text);
      });

      this.isPlayingAudio = true;
      speechText.forEach(text => this.tts.speak(text));

      // this.tts.speak(speechText.toString())
      //   .then(() => 
      //   {
      //     this.isPlayingAudio = false;
      //   });

    }
    else
    {
      speechText = [];
      speechText.push("Now reading Chapter " + this.chapter + " from " + this.bookName);
      this.filteredChapters.forEach(passage =>
      {
        speechText.push(passage.text);
      });

      speechText.forEach(text => this.tts.speak(text));

    }
  }

  copy(passage: BibleBook)
  {
    let chapter = passage.chapter;
    let verse = passage.verse;
    let text = passage.text;
    this.clipboard.copy(`${this.bookName} Chapter ${chapter} verse ${verse}\n${text}.`);
    this.bibleProvider.showToast("Copied verse to your phone's clipboard.");
  }

  favourite(passage: BibleBook)
  {

    let chapter = passage.chapter;
    let verse = passage.verse;
    let text = passage.text;
    let id = this.bookName.substr(0, 3) + chapter + verse;
    var favourite: Favourite = {
      id: id,
      bookName: this.bookName,
      text: text,
      chapter: chapter,
      verse: verse,
      created: new Date()
    };

    if (this.favouriteProvider.isFavorite(favourite))
    {
      this.favouriteProvider.favoriteVerse(favourite);
    }
    else
    {
      this.favouriteProvider.favoriteVerse(favourite);
    }

  }

  isFavorite(passage: BibleBook)
  {
    let chapter = passage.chapter;
    let verseNumber = passage.verse;
    let scriptureText = passage.text;
    let id = this.bookName.substr(0, 3) + chapter + verseNumber;
    var favourite: Favourite = {
      id: id,
      bookName: this.bookName,
      text: scriptureText,
      chapter: chapter,
      verse: verseNumber,
      created: new Date()
    };
    return this.favouriteProvider.isFavorite(favourite);


  }

  share(passage: BibleBook)
  {
    let chapter = passage.chapter;
    let reference = passage.verse;
    let text = passage.text;
    let footer = "Shared from Rhema Bible App!"
    let textToShare = `${this.bookName} Chapter ${chapter} verse ${reference}\n${text}.\n${footer}`;
    this.socialSharing.share(textToShare, null, null, null);
  }



  showAlert(message: string)
  {
    let alert = this.alertCtrl.create({
      message: message
    });
    alert.present();
  }

  showOptionsPopOver(myEvent)
  {
    let popover = this.popoverCtrl.create(ReadOptionsPopOverPage, { verses: this.selectedBook });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(chapter => 
    {
      console.log(chapter);
      if (chapter != null)
      {
        this.chapter = chapter;
      }
    })
  }

  handleAnimation(anim: any) 
  {
    this.anim = anim;
  }

}


