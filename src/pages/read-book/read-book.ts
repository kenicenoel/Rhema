import { Favourite } from './../../models/favourite';
import { FavouriteProvider } from './../../providers/favourite/favourite';
import { DataProvider } from './../../providers/data/data';
import { BibleBook, VersesEntity } from './../../models/bible-book';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Clipboard } from '@ionic-native/clipboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ReadOptionsPopOverPage } from '../read-options-pop-over/read-options-pop-over';

@Component({
  selector: 'page-read-book',
  templateUrl: 'read-book.html',
})
export class ReadBookPage {

  bookName: string;
  selectedBook: BibleBook;
  verses: any[];
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, 
    private tts: TextToSpeech, private popoverCtrl: PopoverController, private clipboard: Clipboard, 
    private alertCtrl: AlertController, private socialSharing: SocialSharing, public favouriteProvider: FavouriteProvider)  {
    this.bookName = navParams.get('book');
      // favouriteProvider.deleteAllFavourites();
  }

  ionViewDidLoad() {
    this.selectedBook = null;
    this.getBookData();
  }

  getBookData() {
    this.data.getBibleBook(this.bookName)
      .subscribe((bookData: BibleBook) => {
        this.selectedBook = bookData;
        this.verses = bookData.verses;
        console.log(this.verses);
        this.getBookFavourites();
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

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  get chapterInt() {
    return this.chapter;
  }


  get filteredVerses() {
    // let filtered = this.verses.filter(verse=> verse.chapter == this.chapter);
    return this.verses.filter(verse => verse.chapter == this.chapter);
  }


  returnToBooks() {
    this.navCtrl.pop();
  }

  toggleReadAloud() {
    if (this.isPlayingAudio) 
    {
      this.tts.speak("")
      .then(()=> 
    {
      this.isPlayingAudio = false;
    })
      // this.tts.stop();
      // this.isPlayingAudio = false;
    }
    else {
     this.playAudio();

    }
  }

  playAudio()
  {
    let speechText = [];

    if (this.chapter == -1) {
      speechText.push("Now reading " + this.bookName);
      this.verses.forEach(verse => {
        speechText.push(verse.text);
      });
       console.log(speechText);
     
      this.isPlayingAudio = true;
      this.tts.speak(speechText.toString())
      .then(() => 
      {
        this.isPlayingAudio = false;
      });
      
    }
    else {
      speechText = [];
      speechText.push("Now reading Chapter " + this.chapter + " from " + this.bookName);
      this.filteredVerses.forEach(verse => {
        speechText.push(verse.text);
      });
      console.log(speechText);
      this.isPlayingAudio = true;
      this.tts.speak(speechText.toString()).then(() => 
      {
        this.isPlayingAudio = false;
      });
    }
  }

  copy(verse:VersesEntity)
  {
    let chapter = verse.chapter;
    let reference = verse.verse;
    let text = verse.text;
    this.clipboard.copy(`${this.bookName} Chapter ${chapter} verse ${reference}\n${text}.`);
    this.data.showToast("Copied verse to your phone's clipboard.");
  }

  favourite(verse:VersesEntity)
  {
    
    let chapter = verse.chapter;
    let verseNumber = verse.verse;
    let scriptureText = verse.text;
    let id = this.bookName.substr(0,3) + chapter+verseNumber;
    var favourite: Favourite = {
      id: id,
      bookName: this.bookName,
      text: scriptureText,
      chapter: chapter,
      verse: verseNumber,
      created: new Date()
    };
    
    if(this.favouriteProvider.isFavorite(favourite))
    {
      this.favouriteProvider.favoriteVerse(favourite);
    }   
    else
    {
      this.favouriteProvider.favoriteVerse(favourite);
    }

  }

  isFavorite(verse: VersesEntity)
  {
    let chapter = verse.chapter;
    let verseNumber = verse.verse;
    let scriptureText = verse.text;
    let id = this.bookName.substr(0,3) + chapter+verseNumber;
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

  share(verse:VersesEntity)
  {
    let chapter = verse.chapter;
    let reference = verse.verse;
    let text = verse.text;
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
    let popover = this.popoverCtrl.create(ReadOptionsPopOverPage, {verses: this.verses});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(chapter => 
      {
      console.log(chapter);
      if(chapter != null)
      {
         this.chapter = chapter;
      }
    })
  }

  isFavourite(verse: VersesEntity)
  {
    let index = this.favourites.findIndex(favourite => favourite.verse == verse.verse && favourite.chapter == verse.chapter && favourite.text == verse.text);
    if(index != -1)
    {
      return true;
    }

    return false;
  }


}


