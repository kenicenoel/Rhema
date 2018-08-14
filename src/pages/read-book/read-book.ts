import { DataProvider } from './../../providers/data/data';
import { BookStat } from './../../models/book-stat';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-read-book',
  templateUrl: 'read-book.html',
})
export class ReadBookPage {

  bookName: string;
  selectedBook: Observable<BibleBook>;
  bookStats: BookStat;

  showMenu: boolean = false;
  chapter: number = -1;
  verse: number = 0;
  light: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) 
  {
    this.bookName = navParams.get('book');
    this.getBookData();
  }

  ionViewDidLoad()
  {
    
  }

  getBookData()
  {
    let book = null;
   this.data.getBibleBook(this.bookName).subscribe(data =>
    {
      book = data;
      this.selectedBook = book;
      return book;
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

  
  // get filteredChapter()
  // {
  //   return this.selectedBook.chapters[this.chapter];
  // }

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
