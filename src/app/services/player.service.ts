import { Injectable } from '@angular/core';
import { Howl } from 'howler';

export type PlayerResp = 'BUSY' | 'LOAD_ERROR' | 'DONE';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private busy = false;

  preload = (src: string) => new Howl({ src, onloaderror: () => console.error(src) });

  play = (src: string) =>
    new Promise<PlayerResp>((res, rej) => {
      /*
       if (this.busy) {
        return rej('BUSY');
      }
       */

      new Howl({
        src,
        onloaderror: () => rej('LOAD_ERROR'),
        onplay: () => (this.busy = true),
        onend: () => [(this.busy = false), res('DONE')],
      }).play();
    });

  playCorrect = () => this.play('audio/correct_answer.mp3');

  playCorrect2 = () => this.play('audio/correct2.mp3');

  playWrong = () => this.play('audio/wrong_answer.mp3');
}
