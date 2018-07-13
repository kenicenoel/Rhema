import { DataProvider } from './../../providers/data/data';
import { BookStat } from './../../models/book-stat';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-read-book',
  templateUrl: 'read-book.html',
})
export class ReadBookPage {

  selectedBook: BibleBook;
  bookStats: BookStat;
  placeholderBookChapters: number[] = [];
  placeholderBookVerses: number[] = [];
  showMenu: boolean = false;
  chapter: number = -1;
  verse: number = 0;
  light: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) 
  {
    this.selectedBook = navParams.get('book');
    this.populatePlaceholderArrays();
    
  }

  toggleMenu()
  {
    this.showMenu = !this.showMenu;
  }

  populatePlaceholderArrays()
  {
    let name = this.selectedBook.name;
    for(let i = 0; i<this.data.getBookStats(name)[0].chapters; i++)
    {
      this.placeholderBookChapters.push(i+1);
    }

    for(let i = 0; i<this.data.getBookStats(name)[0].verses; i++)
    {
      this.placeholderBookVerses.push(i+1);
    }
  }

  get chapterInt()
  {
    return this.chapter;
  }

  get filteredChapter()
  {
    return this.selectedBook.chapters[this.chapter];
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
