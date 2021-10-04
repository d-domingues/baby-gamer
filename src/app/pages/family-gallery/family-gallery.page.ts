import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { FiguresService } from 'src/app/services/figures.service';
import { Figure } from 'src/models/figure';

@Component({
  selector: 'bbg-family-gallery',
  styles: [
    `
      .gallery-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.8em;
        margin: 0.5em;
      }
    `,
  ],
  template: `
    <bbg-header> Galeria de Familia </bbg-header>

    <ion-content>
      <div class="gallery-grid">
        <bbg-figure bonbon="btn" *ngFor="let fig of figures" [figure]="fig" (click)="onPlay(fig.sound)"></bbg-figure>
      </div>
    </ion-content>
  `,
})
export class FamilyGalleryPage {
  figures: Figure[] = this.figService.family;
  options: SpeechRecognitionListeningOptions = { language: 'pt-PT' };
  matches = [];

  constructor(private figService: FiguresService, private speechRecognition: SpeechRecognition, private nativeAudio: NativeAudio) {
    /* this.speechRecognition
      .isRecognitionAvailable()
      .then((available: boolean) => console.log(available));

    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission().then(
          () => console.log('Granted'),
          () => console.log('Denied')
        );
      }
    }); */
  }

  onPlay = (id: string) => this.nativeAudio.play(id);

  /*
  onSpeech = () =>
   this.speechRecognition.startListening(this.options).subscribe(
      (matches: string[]) => (this.matches = matches),
      (onerror) => console.log('error:', onerror)
    );
 */
  // Stop the recognition process (iOS only)
  // this.speechRecognition.stopListening();
}
