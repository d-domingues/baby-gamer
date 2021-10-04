import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Resolve } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Figure } from 'src/models/figure';

const urls: readonly string[] = Object.freeze(['animals', 'family']);

export const FIGURES = new InjectionToken<Promise<any>>('figures list', {
  factory: () => Promise.all(urls.map((url) => fetch(`assets/data/${url}.json`).then((resp) => ({ [url]: resp.json() })))),
});

@Injectable({ providedIn: 'root' })
export class AnimalsService implements Resolve<Figure[]> {
  animals: Figure[] = [];

  constructor(@Inject(FIGURES) private figures: Promise<Figure[]>, private player: PlayerService) {}

  async resolve() {
    this.animals = await this.figures;

    // preload img & sound
    this.animals.forEach((animal) => {
      this.player.preload(animal.sound);
      new Image().src = animal.fileName;
    });

    return this.animals;
  }
}
