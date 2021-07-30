import { Injectable } from '@angular/core';
import { Howl } from 'howler';

export type PayerResp = 'BUSY' | 'LOAD_ERROR' | 'DONE';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private busy = false;
  private readonly mp3AssetsPath = 'assets/';

  play = (soundSrc: string) =>
    new Promise<PayerResp>((res, rej) => {
      if (this.busy) {
        return rej('BUSY');
      }

      new Howl({
        src: [this.mp3AssetsPath + soundSrc],
        onloaderror: () => rej('LOAD_ERROR'),
        onplay: () => (this.busy = true),
        onend: () => {
          this.busy = false;
          res('DONE');
        },
      }).play();
    });

  playByName = (audioName: string) => this.play(`animals/${audioName}.mp3`);

  playCorrect = () => this.play('audio/correct_answer.mp3');

  playWrong = () => this.play('audio/wrong_answer.mp3');
}
