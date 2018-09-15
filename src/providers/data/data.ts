import { DailyVerse } from './../../models/daily-verse';
import { BibleBook } from './../../models/bible-book';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/book';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from 'ionic-angular';
@Injectable()
export class DataProvider {

  kjvBibleData: Book[] = 
  [
    {
      data: "assets/bibles/kjv/Genesis.json",
      icon: "assets/imgs/bible/color/genesis.png",
      title: "Genesis"
    },
    {
      data: "assets/bibles/kjv/Exodus.json",
      icon: "assets/imgs/bible/color/exodus.png",
      title: "Exodus"
    },
    {
      data: "assets/bibles/kjv/Leviticus.json",
      icon: "assets/imgs/bible/color/leviticus.png",
      title: "Leviticus"
    },
    {
      data: "assets/bibles/kjv/Numbers.json",
      icon: "assets/imgs/bible/color/numbers.png",
      title: "Numbers"
    },
    {
      data: "assets/bibles/kjv/Deuteronomy.json",
      icon: "assets/imgs/bible/color/deuteronomy.png",
      title: "Deuteronomy"
    },
    {
      data: "assets/bibles/kjv/Joshua.json",
      icon: "assets/imgs/bible/color/joshua.png",
      title: "Joshua"
    },
    {
      data: "assets/bibles/kjv/Judges.json",
      icon: "assets/imgs/bible/color/judges.png",
      title: "Judges"
    },
    {
      data: "assets/bibles/kjv/Ruth.json",
      icon: "assets/imgs/bible/color/ruth.png.png",
      title: "Ruth"
    },
    {
      data: "assets/bibles/kjv/1Samuel.json",
      icon: "assets/imgs/bible/color/samuel.png.png",
      title: "1 Samuel"
    },
    {
      data: "assets/bibles/kjv/2Samuel.json",
      icon: "assets/imgs/bible/color/samuel.png.png",
      title: "2 Samuel"
    },
    {
      data: "assets/bibles/kjv/1Kings.json",
      icon: "assets/imgs/bible/color/kings.png.png",
      title: "1 Kings"
    },
    {
      data: "assets/bibles/kjv/2Kings.json",
      icon: "assets/imgs/bible/color/kings.png.png",
      title: "2 Kings"
    },
    {
      data: "assets/bibles/kjv/1Chronicles.json",
      icon: "assets/imgs/bible/color/chronicles.png",
      title: "1 Chronicles"
    },
    {
      data: "assets/bibles/kjv/2Chronicles.json",
      icon: "assets/imgs/bible/color/chronicles.png",
      title: "2 Chronicles"
    },
    {
      data: "assets/bibles/kjv/Ezra.json",
      icon: "assets/imgs/bible/color/ezra.png.png",
      title: "Ezra"
    },
    {
      data: "assets/bibles/kjv/Nehemiah.json",
      icon: "assets/imgs/bible/color/nehemiah.png",
      title: "Nehemiah"
    },
    {
      data: "assets/bibles/kjv/Esther.json",
      icon: "assets/imgs/bible/color/esther.png",
      title: "Esther"
    },
    {
      data: "assets/bibles/kjv/Job.json",
      icon: "assets/imgs/bible/color/job.png",
      title: "Job"
    },
    {
      data: "assets/bibles/kjv/Psalms.json",
      icon: "assets/imgs/bible/color/psalms.png.png",
      title: "Psalms"
    },
    {
      data: "assets/bibles/kjv/Proverbs.json",
      icon: "assets/imgs/bible/color/proverbs.png.png",
      title: "Proverbs"
    },
    {
      data: "assets/bibles/kjv/Ecclesiastes.json",
      icon: "assets/imgs/bible/color/ecclesiastes.png",
      title: "Ecclesiastes"
    },
    {
      data: "assets/bibles/kjv/SongOfSolomon.json",
      icon: "assets/imgs/bible/color/song-of-solomon.png",
      title: "Song of Solomon"
    },
    {
      data: "assets/bibles/kjv/Isaiah.json",
      icon: "assets/imgs/bible/color/isaiah.png",
      title: "Isaiah"
    },
    {
      data: "assets/bibles/kjv/Jeremiah.json",
      icon: "assets/imgs/bible/color/jeremiah.png",
      title: "Jeremiah"
    },
    {
      data: "assets/bibles/kjv/Lamentations.json",
      icon: "assets/imgs/bible/color/lamentations.png",
      title: "Lamentations"
    },
    {
      data: "assets/bibles/kjv/Ezekiel.json",
      icon: "assets/imgs/bible/color/ezekiel.png",
      title: "Ezekiel"
    },
    {
      data: "assets/bibles/kjv/Daniel.json",
      icon: "assets/imgs/bible/color/daniel.png",
      title: "Daniel"
    },
    {
      data: "assets/bibles/kjv/Hosea.json",
      icon: "assets/imgs/bible/color/hosea.png",
      title: "Hosea"
    },
    {
      data: "assets/bibles/kjv/Joel.json",
      icon: "assets/imgs/bible/color/joel.png",
      title: "Joel"
    },
    {
      data: "assets/bibles/kjv/Amos.json",
      icon: "assets/imgs/bible/color/amos.png",
      title: "Amos"
    },
    {
      data: "assets/bibles/kjv/Obadiah.json",
      icon: "assets/imgs/bible/color/obadiah.png",
      title: "Obadiah"
    },
    {
      data: "assets/bibles/kjv/Jonah.json",
      icon: "assets/imgs/bible/color/isaiah.png",
      title: "Jonah"
    },
    {
      data: "assets/bibles/kjv/Micah.json",
      icon: "assets/imgs/bible/color/micah.png",
      title: "Micah"
    },
    {
      data: "assets/bibles/kjv/Nahum.json",
      icon: "assets/imgs/bible/color/nahum.png",
      title: "Nahum"
    },
    {
      data: "assets/bibles/kjv/Habakkuk.json",
      icon: "assets/imgs/bible/color/habakkuk.png",
      title: "Habakkuk"
    },
    {
      data: "assets/bibles/kjv/Zephaniah.json",
      icon: "assets/imgs/bible/color/zephaniah.png",
      title: "Zephaniah"
    },
    {
      data: "assets/bibles/kjv/Haggai.json",
      icon: "assets/imgs/bible/color/haggai.png",
      title: "Haggai"
    },
    {
      data: "assets/bibles/kjv/Zechariah.json",
      icon: "assets/imgs/bible/color/zechariah.png",
      title: "Zechariah"
    },
    {
      data: "assets/bibles/kjv/Malachi.json",
      icon: "assets/imgs/bible/color/malachi.png",
      title: "Malachi"
    },
    {
      data: "assets/bibles/kjv/Matthew.json",
      icon: "assets/imgs/bible/color/matthew.png",
      title: "Matthew"
    },
    {
      data: "assets/bibles/kjv/Mark.json",
      icon: "assets/imgs/bible/color/mark.png",
      title: "Mark"
    },
    {
      data: "assets/bibles/kjv/Luke.json",
      icon: "assets/imgs/bible/color/luke.png",
      title: "Luke"
    },
    {
      data: "assets/bibles/kjv/John.json",
      icon: "assets/imgs/bible/color/john.png",
      title: "John"
    },
    {
      data: "assets/bibles/kjv/Acts.json",
      icon: "assets/imgs/bible/color/acts.png",
      title: "Acts"
    },
    {
      data: "assets/bibles/kjv/Romans.json",
      icon: "assets/imgs/bible/color/romans.png",
      title: "Romans"
    },
    {
      data: "assets/bibles/kjv/1Corinthians.json",
      icon: "assets/imgs/bible/color/1-corinthians.png",
      title: "1 Corinthians"
    },
    {
      data: "assets/bibles/kjv/2Corinthians.json",
      icon: "assets/imgs/bible/color/2-corinthians.png",
      title: "2 Corinthians"
    },
    {
      data: "assets/bibles/kjv/Galatians.json",
      icon: "assets/imgs/bible/color/galatians.png",
      title: "Galatians"
    },
    {
      data: "assets/bibles/kjv/Ephesians.json",
      icon: "assets/imgs/bible/color/ephesians.png",
      title: "Ephesians"
    },
    {
      data: "assets/bibles/kjv/Philippians.json",
      icon: "assets/imgs/bible/color/philippians.png.png",
      title: "Philippians"
    },
    {
      data: "assets/bibles/kjv/Colossians.json",
      icon: "assets/imgs/bible/color/colossians.png",
      title: "Colossians"
    },
    {
      data: "assets/bibles/kjv/1Thessalonians.json",
      icon: "assets/imgs/bible/color/1-thessalonians.png",
      title: "1 Thessalonians"
    },
    {
      data: "assets/bibles/kjv/2Thessalonians.json",
      icon: "assets/imgs/bible/color/2-thessalonians.png",
      title: "2 Thessalonians"
    },
    {
      data: "assets/bibles/kjv/1Timothy.json",
      icon: "assets/imgs/bible/color/1-timothy.png",
      title: "1 Timothy"
    },
    {
      data: "assets/bibles/kjv/2Timothy.json",
      icon: "assets/imgs/bible/color/2-timothy.png",
      title: "2 Timothy"
    },
    {
      data: "assets/bibles/kjv/Titus.json",
      icon: "assets/imgs/bible/color/titus.png",
      title: "Titus"
    },
    {
      data: "assets/bibles/kjv/Philemon.json",
      icon: "assets/imgs/bible/color/philemon.png",
      title: "Philemon"
    },
    {
      data: "assets/bibles/kjv/Hebrews.json",
      icon: "assets/imgs/bible/color/hebrews.png",
      title: "Hebrews"
    },
    {
      data: "assets/bibles/kjv/James.json",
      icon: "assets/imgs/bible/color/james.png",
      title: "James"
    },
    {
      data: "assets/bibles/kjv/1Peter.json",
      icon: "assets/imgs/bible/color/1-peter.png",
      title: "1 Peter"
    },
    {
      data: "assets/bibles/kjv/2Peter.json",
      icon: "assets/imgs/bible/color/2-peter.png",
      title: "2 Peter"
    },
    {
      data: "assets/bibles/kjv/1John.json",
      icon: "assets/imgs/bible/color/1-john.png",
      title: "1 John"
    },
    {
      data: "assets/bibles/kjv/2John.json",
      icon: "assets/imgs/bible/color/2-john.png",
      title: "2 John"
    },
    {
      data: "assets/bibles/kjv/3John.json",
      icon: "assets/imgs/bible/color/3-john.png",
      title: "3 John"
    },
    {
      data: "assets/bibles/kjv/Jude.json",
      icon: "assets/imgs/bible/color/jude.png",
      title: "Jude"
    },
    {
      data: "assets/bibles/kjv/Revelations.json",
      icon: "assets/imgs/bible/color/revelation.png",
      title: "Revelation"
    }
  ];
  private dailyVerse: DailyVerse;
  dailyBibleVerse: BehaviorSubject<DailyVerse> = new BehaviorSubject<DailyVerse>(null);
  constructor(public http: HttpClient, private storage: Storage, private toastCtrl: ToastController) 
  { 
    this.init()
  }

  init()
  {
    this.getDailyVerse();
  }


 get bookNames()
 {
   let names = [];
    this.kjvBibleData.forEach(book => {
     names.push(book.title);
   });
   return names;
 }

 getBibleIcon(book: string)
 {
    let index = this.kjvBibleData.findIndex(details => details.title == book);
    return this.kjvBibleData[index].icon;
 }

 getBibleData(book: string)
 {
  let index = this.kjvBibleData.findIndex(details => details.title == book);
  return this.kjvBibleData[index].data;     
 }

 getBibleBook(bookName)
 {
    let fetchPath = this.kjvBibleData.filter(details => details.title == bookName)[0].data;
   return this.http.get<BibleBook>(fetchPath);
 }

getDailyVerse()
{
  this.storage.get('votd')
  .then((data) => 
  {
      if(data)
      {
        if(Date.now() > data.expires)
        {
          this.generateDailyVerse();
        }
        else
        {
          this.dailyBibleVerse.next(data);
        }
      }
      else
      {
        this.generateDailyVerse();
      }

  });
}

 generateDailyVerse()
 {
    let randomBookIndex = Math.floor((Math.random() * 66) + 1);
    let randomBook = this.kjvBibleData[randomBookIndex];
    this.getBibleBook(randomBook.title)
    .subscribe(bookData =>
    {
      let bookLength = bookData.verses.length;
      let randomItem = Math.floor((Math.random() * bookLength) + 1);
      let data = bookData.verses;
      let randomScripture = data[randomItem];
        this.dailyVerse =
        {
          book: randomBook.title,
          chapter: randomScripture.chapter,
          verse: randomScripture.verse,
          text: randomScripture.text.replace("[","").replace("]",""),
          expires: Date.now() + (60 * 60 * 1000) * 24
        };
        this.storage.set('votd', this.dailyVerse);
        this.dailyBibleVerse.next(this.dailyVerse);
      });
         
   
 }

 showToast(messageToShow: string)
 {
   let toast = this.toastCtrl.create({
     message: messageToShow,
     duration: 3000
   });

   toast.present();
 }


 
}
