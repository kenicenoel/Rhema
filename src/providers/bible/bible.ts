import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { BookData } from '../../models/book-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scripture } from '../../models/scripture';
import { AnimationData } from '../../models/animation';


@Injectable()
export class BibleProvider
{


  bookdataUrl: string = "assets/bibles/kjv-specs.json";
  kjvBibleUrl: string = "assets/bibles/kjv.json";
  darkModeEnabled: string;
  recentlyReadBooks: string[] = [];
  animations: AnimationData[] = [
    {
      key: 'progress-bar',
      anim: 'assets/imgs/anim/progress_bar.json'
    },
    {
      key: 'like',
      anim: 'assets/imgs/anim/like.json'
    },
    {
      key: 'checked-done',
      anim: 'assets/imgs/anim/checked_done.json'
    },
    {
      key: 'wave',
      anim: 'assets/imgs/anim/wave.json'
    },
    {
      key: 'books',
      anim: 'assets/imgs/anim/books.json'
    },
    {
      key: 'loading',
      anim: 'assets/imgs/anim/loading_animation.json'
    },
    {
      key: 'bookmark',
      anim: 'assets/imgs/anim/bookmark_animation.json'
    },
    {
      key: 'speak',
      anim: 'assets/imgs/anim/wakeup_speaking.json'
    },
    {
      key: 'search',
      anim: 'assets/imgs/anim/search.json'
    }
  ]
  constructor(public http: HttpClient, private toastCtrl: ToastController, private storage: Storage)
  {
    this.bootstrap();
  }

  bootstrap()
  {
    this.fetchRecentlyReadBooks();
  }



  getBibleBookData()
  {
    return this.http.get<BookData[]>(this.bookdataUrl);
  }


  getBibleBook()
  {
    return this.http.get<Scripture[]>(this.kjvBibleUrl);
  }

  getRecentlyReadBooks()
  {
    return this.recentlyReadBooks || [];
  }

  saveBookToRecentlyRead(bookName: string)
  {
    if (this.recentlyReadBooks == null)
    {
      this.recentlyReadBooks = [];
    }
    if (this.recentlyReadBooks != null && this.recentlyReadBooks != undefined && this.recentlyReadBooks.length == 5)
    {
      this.recentlyReadBooks.shift();
    }
    let isInArray = this.recentlyReadBooks.indexOf(bookName);
    if (isInArray == -1)
    {
      this.recentlyReadBooks.push(bookName);
    }

    this.storage.set("recentlyRead", this.recentlyReadBooks);
  }


  fetchRecentlyReadBooks()
  {
    this.storage.get("recentlyRead")
      .then(recentlyRead =>
      {
        this.recentlyReadBooks = recentlyRead;
      })

  }

  
  showToast(messageToShow: string)
  {
    let toast = this.toastCtrl.create({
      message: messageToShow,
      duration: 3000
    });

    toast.present();
  }

  getAnimation(key: string, repeat: boolean = false)
  {
    var animPath = this.animations.find(animation => animation.key == key).anim;
    if (animPath)
    {
      var config =
      {
        path: animPath,
        renderer: 'canvas',
        autoplay: true,
        loop: repeat
      };

      return config;
    }

  }

  getDarkModeEnabled()
  {
    this.darkModeEnabled = 'disabled';
    return this.storage.get("darkMode");

  }



}
