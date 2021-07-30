import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { Animal } from '../../models/animal';

@Injectable({ providedIn: 'root' })
export class AnimalsService implements Resolve<Promise<Animal>> {
  animals: string[] = [];

  constructor(private nativeAudio: NativeAudio) {
    fetch('assets/animals/animals.json')
      .then((resp) => resp.json())
      .then((resp) => {
        this.animals = resp;

        this.animals.forEach((photo) => {
          new Image().src = 'assets/animals/' + photo + '.svg';
        });

        // this.animals.forEach((a) => fetch('assets/animals/' + a + '.svg'));
      });
  }

  async resolve() {
    /*     this.nativeAudio.preloadSimple(
      e.name.replace(/\.[^/.]+$/, ''),
      e.fullPath.substring(1)
    );
    */
    /*
    const req = await fetch('assets/animals/animals.json');
    this.animals = await req.json();
    this.animals.forEach((a) =>
      this.nativeAudio.preloadSimple(a.name, `assets/audio/${a.name}.mp3`).then(
        (suc) => console.log(a.name, suc),
        (err) => console.log('err', err)
      )
    );
 */
    return null;
  }

  getRandom = (n: number): string[] =>
    this.animals.sort(() => 0.5 - Math.random()).slice(0, n);

  getRandomPairs = (n: number): string[] => {
    const rand = this.getRandom(n);
    return [...rand, ...rand].sort(() => 0.5 - Math.random());
  };

  randBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  getMultipleChoiseElements = (n = 5): MultipleChoiceElements[] => {
    const elements: MultipleChoiceElements[] = [];

    const generateElements = () => {
      const options = this.getRandom(4);
      const answer = options[this.randBetween(0, 3)];
      return { answer, options };
    };

    while (elements.length < n) {
      const next = generateElements();
      if (!elements.find((e) => e.answer === next.answer)) {
        elements.push(next);
      }
    }

    return elements;
  };
}

export interface MultipleChoiceElements {
  answer: string;
  options: string[];
}
