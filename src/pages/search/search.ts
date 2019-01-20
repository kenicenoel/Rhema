import { Scripture } from './../../models/scripture';
import { BibleProvider } from './../../providers/bible/bible';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage
{

  searchAnimationConfig: Object;
  searchTerm: string;
  searchControl: FormControl;
  private anim: any;
  darkMode: boolean;
  fullBibleText: Scripture[];
   filteredScripture: Scripture[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private bibleProvider: BibleProvider)
  {
    this.searchAnimationConfig = this.bibleProvider.getAnimation("search", true);
    this.searchControl = new FormControl();
    this.getBookData();
  }

  ionViewWillEnter()
  {
    this.getDarkModeEnabled();
  }

  getDarkModeEnabled()
  {
    this.bibleProvider.getDarkModeEnabled()
      .then(status =>
      {
        this.darkMode = status == 'enabled' ? true : false;

      });
  }

  ionViewDidLoad() 
  {
    
    // this.setFilteredScripture();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search =>
    {
      this.setFilteredScripture();
    })
  }

  getBookData()
  {
    this.bibleProvider.getBibleBook()
      .subscribe(bibleText => 
      {
        this.fullBibleText = bibleText;
      },
        error => console.log(error)
      )
  }

  filterBible()
  {
    if (this.searchTerm && this.searchTerm !== "" )
    {
      return this.fullBibleText.filter((bibleText) =>
      {
        return bibleText.text.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      })
    }
  }

  setFilteredScripture()
  {
    this.filteredScripture = this.filterBible();
  }

  onCancel()
  {
    this.filteredScripture = [];
  }


  handleAnimation(anim: any) 
  {
    this.anim = anim;
  }

}






