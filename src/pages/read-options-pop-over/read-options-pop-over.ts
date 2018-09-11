import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-read-options-pop-over',
  templateUrl: 'read-options-pop-over.html',
})
export class ReadOptionsPopOverPage {

  verses: any[] = [];
  selectedChapter: number = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() 
  {
    this.verses = this.navParams.get('verses');
  }

  pickChapter(verse: number)
  {
    this.selectedChapter = verse;
  }

  close()
  {
    this.viewCtrl.dismiss(this.selectedChapter);
  }

}
