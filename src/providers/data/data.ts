import { DailyVerse } from './../../models/daily-verse';
import { BookStat } from './../../models/book-stat';
import { BibleBook } from './../../models/bible-book';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';
@Injectable()
export class DataProvider {


  bibleBookNames: string [] = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
    ]
    bibleBooks: string [] = [
      "assets/bibles/kjv/1Chron.json",
    "assets/bibles/kjv/1Cor.json",
    "assets/bibles/kjv/1John.json",
    "assets/bibles/kjv/1Kings.json",
    "assets/bibles/kjv/1Peter.json",
    "assets/bibles/kjv/1Sam.json",
    "assets/bibles/kjv/1Thes.json",
    "assets/bibles/kjv/1Tim.json",
    "assets/bibles/kjv/2Chron.json",
    "assets/bibles/kjv/2Cor.json",
    "assets/bibles/kjv/2John.json",
    "assets/bibles/kjv/2Kings.json",
    "assets/bibles/kjv/2Peter.json",
    "assets/bibles/kjv/2Sam.json",
    "assets/bibles/kjv/2Thes.json",
    "assets/bibles/kjv/2Tim.json",
    "assets/bibles/kjv/3John.json",
    "assets/bibles/kjv/Acts.json",
    "assets/bibles/kjv/Amos.json",
    "assets/bibles/kjv/Col.json",
    "assets/bibles/kjv/Daniel.json",
    "assets/bibles/kjv/Deut.json",
    "assets/bibles/kjv/Eccl.json",
    "assets/bibles/kjv/Eph.json",
    "assets/bibles/kjv/Esther.json",
    "assets/bibles/kjv/Exodus.json",
    "assets/bibles/kjv/Ezekiel.json",
    "assets/bibles/kjv/Ezra.json",
    "assets/bibles/kjv/Gal.json",
    "assets/bibles/kjv/Genesis.json",
    "assets/bibles/kjv/Habakkuk.json",
    "assets/bibles/kjv/Haggai.json",
    "assets/bibles/kjv/Hebrews.json",
    "assets/bibles/kjv/Hosea.json",
    "assets/bibles/kjv/Isaiah.json",
    "assets/bibles/kjv/James.json",
    "assets/bibles/kjv/Jeremiah.json",
    "assets/bibles/kjv/Job.json",
    "assets/bibles/kjv/Joel.json",
    "assets/bibles/kjv/John.json",
    "assets/bibles/kjv/Jonah.json",
    "assets/bibles/kjv/Joshua.json",
    "assets/bibles/kjv/Jude.json",
    "assets/bibles/kjv/Judges.json",
    "assets/bibles/kjv/Lament.json",
    "assets/bibles/kjv/Lev.json",
    "assets/bibles/kjv/Luke.json",
    "assets/bibles/kjv/Malachi.json",
    "assets/bibles/kjv/Mark.json",
    "assets/bibles/kjv/Matthew.json",
    "assets/bibles/kjv/Micah.json",
    "assets/bibles/kjv/Nahum.json",
    "assets/bibles/kjv/Nehemiah.json",
    "assets/bibles/kjv/Num.json",
    "assets/bibles/kjv/Obadiah.json",
    "assets/bibles/kjv/Philemon.json",
    "assets/bibles/kjv/Philip.json",
    "assets/bibles/kjv/Proverbs.json",
    "assets/bibles/kjv/Psalms.json",
    "assets/bibles/kjv/Rev.json",
    "assets/bibles/kjv/Romans.json",
    "assets/bibles/kjv/Ruth.json",
    "assets/bibles/kjv/Song.json",
    "assets/bibles/kjv/Titus.json",
    "assets/bibles/kjv/Zech.json",
    "assets/bibles/kjv/Zeph.json"
    ]
    bibleIcons = [
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
    

  bibleBooksStats: BookStat[] = [];
  bibleBookData: BibleBook = null;
  bibleBook: any [];
  dailyVerse: DailyVerse = null;
  constructor(public http: HttpClient) 
  { 
      // this.getBibleBook(name);
  }

 getBibleBook(bookName): Observable<BibleBook>
 {
    let fetchPath = this.bibleBooks.filter(name => name.includes(bookName))[0];
   return this.http.get<BibleBook>(fetchPath)
    

    // return this.bibleBookData;
 }

 getBibleStats()
 {
//    this.bibleBookData.forEach(book => {
//      book.chapters.forEach(chapter => {
//        let stat: BookStat = {
//          name: book.name,
//          chapters: book.chapters.length,
//         verses: chapter.length
//        }
//        this.bibleBooksStats.push(stat);
//      })
//    });
 }

 get bible()
 {
   return this.bibleBookData;
 }

 get bookNames()
 {
   return this.bibleBookNames;
 }

 getBibleIcon(name: string)
 {
   let lowercaseName = name.toLowerCase().split(' ').join('-');
  
   
   let path = this.bibleIcons.filter(iconPath => 
     
     iconPath.toLowerCase().includes(lowercaseName) ||
     iconPath.toLowerCase().includes(lowercaseName.substr(3)))[0];
   
   return path;
     
 }

 getBookStats(name)
 {
   return this.bibleBooksStats.filter(book => book.name == name);
 }

//  generateDailyVerse()
//  {
//    let date = new Date().toDateString();
//    let books = this.bibleBookData.length ? this.bibleBookData.length : 0;
//    if(this.dailyVerse == null || this.dailyVerse == undefined || this.dailyVerse.date != date)
//    {
//     let randomBookIndex = Math.floor((Math.random() * books) + 1);
//     let randomBook = this.bibleBookData[randomBookIndex];

//     let chapterCount = randomBook.chapters.length;
//     let randomChapterIndex = Math.floor((Math.random() * chapterCount) + 1);
//     let randomChapter = randomBook.chapters[randomChapterIndex];

//     let verseCount = randomChapter.length;
//     let randomVerse = Math.floor((Math.random() * verseCount) + 1);
//     let text = randomChapter[randomVerse];
//     let votd =
//     {
//       book: randomBook.name,
//       chapter: randomChapterIndex +1,
//       verse: randomVerse,
//       text: text,
//       date: new Date().toDateString()
//     };

//     this.dailyVerse = votd;
//    }

//    return this.dailyVerse;
   
    
//  }

 
}
