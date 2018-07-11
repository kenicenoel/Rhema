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
  showMenu: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.selectedBook = navParams.get('book');
  }

  toggleMenu()
  {
    this.showMenu = !this.showMenu;
  }

  returnToBooks()
  {
    this.navCtrl.pop();
  }


}
