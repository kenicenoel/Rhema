import { BibleBook } from './../../models/bible-book';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

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
     
    }, 
    error =>
    {
      console.log("Sorry. Something went wrong. Here's the problem: "+ error);
      
    })
  
 }

 get bible()
 {
   return this.bibleData;
 }

 
}
