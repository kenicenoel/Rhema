import { DataProvider } from './../../providers/data/data';
import { BibleBook } from './../../models/bible-book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs';


@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {
  
  bible$: Observable<BibleBook[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {}

  ionViewWillLoad()
  {
    this.bible$ = this.data.getLocalBibleData();
  }

}
