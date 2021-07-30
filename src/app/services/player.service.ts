import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Howl } from 'howler';
import { AnimalsService } from 'src/app/services/animals.service';

export type PayerResp = 'BUSY' | 'LOAD_ERROR' | 'DONE';

@Injectable({ providedIn: 'root' })
export class PlayerService implements Resolve<Howl> {
  private busy = false;
  private readonly mp3AssetsPath = 'assets/';

  constructor(private animalService: AnimalsService) {}

  resolve = () => {
    /*     setTimeout(() => {
      const srces = this.animalService.animals.map(
        (a) => `assets/animals/${a.name}.mp3`
      );
      srces.forEach((src) => new Howl({ src }))
    }, 2000); */

    //this.animalService.loadedAnimals.then((anim) => console.log(anim));

    return null; // new Howl({});
  };

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
