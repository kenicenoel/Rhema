import { DataProvider } from './../../providers/data/data';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) 
  {
    this.bookName = navParams.get('book');
    
  }

  ionViewDidLoad()
  {
    this.selectedBook = null;
    this.getBookData();
  }

  getBookData()
  {
    this.data.getBibleBook(this.bookName)
    .subscribe((bookData: BibleBook) =>
    {
        
       
        this.selectedBook = bookData;
        this.verses = bookData.verses;
        console.log(this.verses);
    },
    error=> console.log(error)
  );
    console.log(this.selectedBook);
    
  
  }

  toggleMenu()
  {
    this.showMenu = !this.showMenu;
  }

  get chapterInt()
  {
    return this.chapter;
  }

  
  get filteredVerses()
  {
    let filtered = this.verses.filter(verse=> verse.chapter == this.chapter);
    return this.verses.filter(verse=> verse.chapter == this.chapter);
  }

  darkMode()
  {
    this.light = false;
  }

  lightMode()
  {
    this.light = true;
  }

  returnToBooks()
  {
    this.navCtrl.pop();
  }


}
