import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Animal } from '../../models/animal';

@Injectable({ providedIn: 'root' })
export class AnimalsService implements Resolve<Promise<Animal>> {
  animals: Animal[] = [];

  resolve = () =>
    fetch('assets/animals/animals.json')
      .then((resp) => resp.json())
      .then((resp) => (this.animals = resp));

  getRandom = (n: number): Animal[] =>
    this.animals.sort(() => 0.5 - Math.random()).slice(0, n);
}
