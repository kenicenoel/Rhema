import { DataProvider } from './../../providers/data/data';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-read-book',
  templateUrl: 'read-book.html',
})
export class ReadBookPage {

  bookName: string;
  selectedBook: BibleBook;
  verses: any[];
  showMenu: boolean = false;
  chapter: number = -1;
  verse: number = 0;
  light: boolean = true;
  isPlayingAudio: boolean = false;
  ttsOptions: any = {
    text: 'This feature is not ready yet.',
    rate: 1,
    locale: 'en-US'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, private tts: TextToSpeech) {
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
      },
        error => console.log(error)
      );
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
}


