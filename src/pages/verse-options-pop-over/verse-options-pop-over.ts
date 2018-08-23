import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-verse-options-pop-over',
  templateUrl: 'verse-options-pop-over.html',
})
export class VerseOptionsPopOverPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {}

  copy(text: string)
  {
    this.close();
  }

  favourite()
  {
    this.close();
  }

  share(text:string)
  {
    this.close();
  }

  close() 
  {
    this.viewCtrl.dismiss();
  }
 

}
