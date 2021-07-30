import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { AudioService } from 'src/app/services/audio.service';
import { FigureService } from 'src/app/services/figure.service';
import { Figure } from 'src/models/figure';

@Component({
  selector: 'bbg-family-gallery',
  styleUrls: ['./family-gallery.page.scss'],
  template: `
    <bbg-header></bbg-header>

    <ion-content>
      <div class="gallery-grid">
        <img
          bonbon="btn"
          *ngFor="let fig of figures"
          [src]="fig.src"
          (click)="onPlay(fig.id)"
        />
      </div>
    </ion-content>
  `,
})
export class FamilyGalleryPage {
  figures: Figure[] = this.figService.figures;
  options: SpeechRecognitionListeningOptions = { language: 'pt-PT' };
  matches = [];

  constructor(
    private figService: FigureService,
    private speechRecognition: SpeechRecognition,
    private nativeAudio: NativeAudio,
    private audioServ: AudioService
  ) {
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

  onPlay(id: string) {
    this.nativeAudio.play(id);
  }

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
