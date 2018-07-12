import { BibleBook } from './../../models/bible-book';
import { ReadBookPage } from './../read-book/read-book';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

const bibleIcons = [
'assets/imgs/bible/color/1-corinthians.png',
'assets/imgs/bible/color/1-john.png',
'assets/imgs/bible/color/1-peter.png',
'assets/imgs/bible/color/1-thessalonians.png',
'assets/imgs/bible/color/1-timothy.png',
'assets/imgs/bible/color/2-corinthians.png',
'assets/imgs/bible/color/2-john.png',
'assets/imgs/bible/color/2-peter.png',
'assets/imgs/bible/color/2-thessalonians.png',
'assets/imgs/bible/color/2-timothy.png',
'assets/imgs/bible/color/3-john.png',
'assets/imgs/bible/color/acts.png',
'assets/imgs/bible/color/amos.png',
'assets/imgs/bible/color/chronicles.png',
'assets/imgs/bible/color/colossians.png',
'assets/imgs/bible/color/daniel.png',
'assets/imgs/bible/color/deuteronomy.png',
'assets/imgs/bible/color/ecclesiastes.png',
'assets/imgs/bible/color/ephesians.png',
'assets/imgs/bible/color/esther.png',
'assets/imgs/bible/color/exodus.png',
'assets/imgs/bible/color/ezekiel.png',
'assets/imgs/bible/color/ezra.png.png',
'assets/imgs/bible/color/galatians.png',
'assets/imgs/bible/color/general-epistles.png',
'assets/imgs/bible/color/general-epistles-notext.png',
'assets/imgs/bible/color/genesis.png',
'assets/imgs/bible/color/gospels.png',
'assets/imgs/bible/color/gospels-notext.png',
'assets/imgs/bible/color/habakkuk.png',
'assets/imgs/bible/color/haggai.png',
'assets/imgs/bible/color/hebrews.png',
'assets/imgs/bible/color/history.png',
'assets/imgs/bible/color/history-notext.png',
'assets/imgs/bible/color/hosea.png',
'assets/imgs/bible/color/isaiah.png',
'assets/imgs/bible/color/james.png',
'assets/imgs/bible/color/jeremiah.png',
'assets/imgs/bible/color/job.png',
'assets/imgs/bible/color/joel.png',
'assets/imgs/bible/color/john.png',
'assets/imgs/bible/color/Jonah.png',
'assets/imgs/bible/color/joshua.png',
'assets/imgs/bible/color/jude.png',
'assets/imgs/bible/color/judges.png',
'assets/imgs/bible/color/kings.png.png',
'assets/imgs/bible/color/lamentations.png',
'assets/imgs/bible/color/law.png',
'assets/imgs/bible/color/law-notext.png',
'assets/imgs/bible/color/leviticus.png',
'assets/imgs/bible/color/luke.png',
'assets/imgs/bible/color/major-prophets.png',
'assets/imgs/bible/color/major-prophets-notext.png',
'assets/imgs/bible/color/malachi.png',
'assets/imgs/bible/color/mark.png',
'assets/imgs/bible/color/matthew.png',
'assets/imgs/bible/color/micah.png',
'assets/imgs/bible/color/minor-prophets.png',
'assets/imgs/bible/color/minor-prophets-notext.png',
'assets/imgs/bible/color/nahum.png',
'assets/imgs/bible/color/nehemiah.png',
'assets/imgs/bible/color/numbers.png',
'assets/imgs/bible/color/obadiah.png',
'assets/imgs/bible/color/pauline-epistles.png',
'assets/imgs/bible/color/pauline-epistles-notext.png',
'assets/imgs/bible/color/philemon.png',
'assets/imgs/bible/color/philippians.png.png',
'assets/imgs/bible/color/poetry.png',
'assets/imgs/bible/color/poetry-notext.png',
'assets/imgs/bible/color/proverbs.png.png',
'assets/imgs/bible/color/psalms.png.png',
'assets/imgs/bible/color/revelation.png',
'assets/imgs/bible/color/romans.png',
'assets/imgs/bible/color/ruth.png.png',
'assets/imgs/bible/color/samuel.png.png',
'assets/imgs/bible/color/song-of-solomon.png',
'assets/imgs/bible/color/titus.png',
'assets/imgs/bible/color/zechariah.png',
'assets/imgs/bible/color/zephaniah.png'
]

@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {}

  loadBook(book: BibleBook)
  {
    this.navCtrl.push(ReadBookPage, {book: book});
  }

  getBibleIcon(name: string)
  {
    let lowercaseName = name.toLowerCase().split(' ').join('-');
   
    
    let path = bibleIcons.filter(iconPath => 
      
      iconPath.toLowerCase().includes(lowercaseName) ||
      iconPath.toLowerCase().includes(lowercaseName.substr(3)))[0];
    
    return path;
      
  }
  

}
