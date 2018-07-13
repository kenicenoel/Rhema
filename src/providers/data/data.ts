import { DailyVerse } from './../../models/daily-verse';
import { BookStat } from './../../models/book-stat';
import { BibleBook } from './../../models/bible-book';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class DataProvider {

  bibleBooksStats: BookStat[] = [];
  bibleData: BibleBook[];
  dailyVerse: DailyVerse;
  constructor(public http: HttpClient) 
  { 
    this.getLocalBibleData();
  }

 getLocalBibleData()
 {
    this.http.get<BibleBook[]>('../assets/bibles/kjv_en.json').subscribe(response => 
    {
     this.bibleData = response;
     console.log(response);
     this.getBibleStats();
    //  this.generateDailyVerse();
    }, 
    error =>
    {
      console.log("Sorry. Something went wrong. Here's the problem: "+ error);
      
    })
  
 }

 getBibleStats()
 {
   this.bibleData.forEach(book => {
     book.chapters.forEach(chapter => {
       let stat: BookStat = {
         name: book.name,
         chapters: book.chapters.length,
        verses: chapter.length
       }
       this.bibleBooksStats.push(stat);
     })
   });
 }



 get bible()
 {
   return this.bibleData;
 }



 getBookStats(name)
 {
   return this.bibleBooksStats.filter(book => book.name == name);
 }

 generateDailyVerse()
 {
   let date = new Date().toDateString();
   if(!this.dailyVerse || this.dailyVerse == undefined || this.dailyVerse.date != date)
   {
    let randomBookIndex = Math.floor((Math.random() * 66) + 1) -1;
    let randomBook = this.bibleData[randomBookIndex];

    let chapterCount = randomBook.chapters.length;
    let randomChapterIndex = Math.floor((Math.random() * chapterCount) + 1);
    let randomChapter = randomBook.chapters[randomChapterIndex];

    let verseCount = randomChapter.length;
    let randomVerse = Math.floor((Math.random() * verseCount) + 1);
    let text = randomChapter[randomVerse];
    
      this.dailyVerse = {
      book: randomBook.name,
      chapter: randomChapterIndex +1,
      verse: randomVerse,
      text: text,
      date: new Date().toDateString()
    }
   }

   return this.dailyVerse;
   
    
 }

 
}
