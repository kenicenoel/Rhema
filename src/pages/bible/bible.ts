import { BibleBook } from './../../models/bible-book';
import { ReadBookPage } from './../read-book/read-book';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {}

  loadBook(book: string)
  {
    this.navCtrl.push(ReadBookPage, {book: book});
  }

 

  ionViewDidEnter()
  {
    this.data.bible.forEach(book =>
      {
        console.log(book.name);
     });
  }
  

}
