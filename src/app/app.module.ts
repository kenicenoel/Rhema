import { FavouriteComponent } from './../components/favourite/favourite';
import { MorePage } from './../pages/More/more';
import { ReadOptionsPopOverPage } from './../pages/read-options-pop-over/read-options-pop-over';
import { FavouritePage } from './../pages/favourite/favourite';
import { ZeroPadPipe } from './../pipes/zero-pad/zero-pad';
import { ReadBookPage } from './../pages/read-book/read-book';
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
import { SearchPage } from '../pages/search/search';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { LottieAnimationViewModule } from 'ng-lottie';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Clipboard } from '@ionic-native/clipboard';
import { FavouriteProvider } from '../providers/favourite/favourite';
import { BibleProvider } from '../providers/bible/bible';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BiblePage,
    MorePage,
    SearchPage,
    FavouritePage,
    ReadBookPage,
    ZeroPadPipe,
    FavouriteComponent,
    ReadOptionsPopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    LottieAnimationViewModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BiblePage,
    FavouriteComponent,
    SearchPage,
    MorePage,
    FavouritePage,
    ReadBookPage,
    ReadOptionsPopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing,
    StreamingMedia,
    Clipboard,
    FavouriteProvider,
    BibleProvider
  ]
})
export class AppModule {}
