import { ReadBookPage } from './../read-book/read-book';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage 
{
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {}

  loadBook(book: string)
  {
    this.navCtrl.push(ReadBookPage, {book: book});
  }

  

}
