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

 
}
