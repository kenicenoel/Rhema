import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BibleBook } from '../../models/bible-book';

@Injectable()
export class DataProvider {

  bibleData: any;
  constructor(public http: HttpClient) 
  { 
    this.getLocalBibleData();
  }

 getLocalBibleData(): Observable<BibleBook[]>
 {
    return this.http.get('../assets/bibles/kjv_en.json')
    .map((res: Response) => res.json())
 }

 get bible()
 {
   return this.bibleData;
 }
}
