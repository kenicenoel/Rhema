import { FavouritePage } from './../pages/favourite/favourite';
import { ZeroPadPipe } from './../pipes/zero-pad/zero-pad';
import { ReadBookPage } from './../pages/read-book/read-book';
import { ProfilePage } from './../pages/profile/profile';
import { BiblePage } from './../pages/bible/bible';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SpeakPage } from '../pages/speak/speak';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BiblePage,
    ProfilePage,
    SpeakPage,
    ReadBookPage,
    FavouritePage,
    ZeroPadPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BiblePage,
    SpeakPage,
    ProfilePage,
    ReadBookPage,
    FavouritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
