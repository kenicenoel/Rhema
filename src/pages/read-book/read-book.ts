import { VerseOptionsPopOverPage } from './../verse-options-pop-over/verse-options-pop-over';
import { DataProvider } from './../../providers/data/data';
import { BibleBook, VersesEntity } from './../../models/bible-book';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Clipboard } from '@ionic-native/clipboard';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, 
    private tts: TextToSpeech, private popoverCtrl: PopoverController, private clipboard: Clipboard, 
    private alertCtrl: AlertController)  {
    this.bookName = navParams.get('book');

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
        this.isLoading = false;
      },
        error => console.log(error)
      )
    console.log(this.selectedBook);


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

  darkMode() {
    this.light = false;
    
  }

  lightMode() {
    this.light = true;
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
    this.clipboard.copy(`Chapter ${chapter} verse ${reference}\n${text}.`);
    this.showAlert("Copied verse to your phone's clipboard.");
  }

  favourite()
  {

  }

  share()
  {

  }
  showAlert(message: string)
  {
    let alert = this.alertCtrl.create({
      message: message
    });
    alert.present();
  }

  showOptionsPopOver()
  {
    let popover = this.popoverCtrl.create({
      
    })
  }
}


