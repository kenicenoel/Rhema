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
  constructor(public navCtrl: NavController, public navParams: NavParams, public bibleProvider: BibleProvider) {}

  ionViewWillLoad()
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
  

}
