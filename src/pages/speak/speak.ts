import { BibleProvider } from './../../providers/bible/bible';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import * as SDK from 'microsoft-speech-browser-sdk';

const BING_SPEECH_API_KEY = "2cf1e40d197347e48ccc7ae4d66dbe5c";

@Component({
  selector: 'page-speak',
  templateUrl: 'speak.html',
})
export class SpeakPage {

  status: string = "Ready to listen";
  isListening: boolean = false;
  speechRecognizer: SDK.Recognizer;
  speakAnimationConfig: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController, private bibleProvider: BibleProvider)
   {
    this.speechRecognizer = this.recognizerSetup(SDK, SDK.RecognitionMode.Interactive, "en-US", SDK.SpeechResultFormat.Simple, BING_SPEECH_API_KEY);
   }

  ionViewDidEnter() 
  {
    console.log(this.speechRecognizer);
    this.speakAnimationConfig = this.bibleProvider.getAnimation("speak", true);
  }

  recognizerSetup(SDK, recognitionMode, language, format, subscriptionKey) {
    let recognizerConfig = new SDK.RecognizerConfig(
      new SDK.SpeechConfig(
        new SDK.Context(
          new SDK.OS(navigator.userAgent, "Browser", null),
          new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000"))),
      recognitionMode, // SDK.RecognitionMode.Interactive  (Options - Interactive/Conversation/Dictation)
      language, // Supported languages are specific to each recognition mode Refer to docs.
      format); // SDK.SpeechResultFormat.Simple (Options - Simple/Detailed)

    // Alternatively use SDK.CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) for token auth
    let authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);

    return SDK.CreateRecognizer(recognizerConfig, authentication);
  }

  toggleListening()
  {
    if(this.isListening)
    {
      this.recognizerStop(this.speechRecognizer);
      this.isListening = false;
    }
    else
    {
      if(this.speechRecognizer)
      {
        this.recognizerStart(this.speechRecognizer);
        this.isListening = true;
      }
      else
      {
        let alert = this.alert.create({
          message: 'Sorry, but the speech recognizer isn\'t quite ready yet.'
        });
        alert.present();
  
      }
    }
   
  }

  recognizerStart(recognizer) {
    recognizer.Recognize((event) => {
        /*
            Alternative syntax for typescript devs.
            if (event instanceof SDK.RecognitionTriggeredEvent)
        */
        switch (event.Name) {
            case "RecognitionTriggeredEvent" :
                this.status = "Initializing";
                break;
            case "ListeningStartedEvent" :
                this.status = "Listening";
                break;
            case "RecognitionStartedEvent" :
                this.status = "Recognizing";
                break;
            case "SpeechStartDetectedEvent" :
                this.status = "Listening_DetectedSpeech_Recognizing";
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechHypothesisEvent" :
                // UpdateRecognizedHypothesis(event.Result.Text);
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechFragmentEvent" :
                // UpdateRecognizedHypothesis(event.Result.Text);
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechEndDetectedEvent" :
                this.onSpeechEndDetected();
                this.status = "Adding final touches";
                console.log(JSON.stringify(event.Result)); // check console for other information in result
                break;
            case "SpeechSimplePhraseEvent" :
                this.status = JSON.stringify(event.Result, null, 3);
                break;
            case "SpeechDetailedPhraseEvent" :
                this.status = JSON.stringify(event.Result, null, 3);
                break;
            case "RecognitionEndedEvent" :
                this.onComplete();
                this.status = "Idle";
                console.log(JSON.stringify(event)); // Debug information
                break;
        }
    })
    .On(() => {
        // The request succeeded. Nothing to do here.
    },
    (error) => {
        console.error(error);
    });
}

onSpeechEndDetected()
{

}

  recognizerStop(recognizer) 
  {
    // recognizer.AudioSource.Detach(audioNodeId) can be also used here. (audioNodeId is part of ListeningStartedEvent)
    recognizer.AudioSource.TurnOff();
  }
  
  onComplete()
  {
    this.isListening = false;
    this.recognizerStop(this.speechRecognizer);
  }

  handleAnimation(anim: any) {
}

}






