import { BookData } from './../../models/bookdata';
import { BibleProvider } from './../../providers/bible/bible';
import { ReadBookPage } from './../read-book/read-book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage 
{
  bibleBookData: BookData[] = [];
  displayMode: string = "cards";
  searchText: string;
  shouldShowCancel: true;
  darkMode: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bibleProvider: BibleProvider)
  {
    this.getBibleBookData();
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
  getBibleBookData()
  {
    this.bibleProvider.getBibleBookData()
    .subscribe(bookData =>
    {
      this.bibleBookData = bookData;
    })
  }

  loadBook(book: string)
  {
    this.navCtrl.push(ReadBookPage, {book: book});
  }

  toggleDisplayMode()
  {
    this.displayMode = this.displayMode == 'cards' ? this.displayMode = 'list' : 'cards';
  }

  onInput($event)
  {

  }

  onCancel($event)
  {

  }
  

}
