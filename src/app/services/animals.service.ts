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

  getRandom = (qty: number): Animal[] => [
    { name: 'fish', img: 'fish', nameAudio: 'fish', sound: 'fish' },
    { name: 'camel', img: 'camel', nameAudio: 'camel', sound: 'camel' },
    { name: 'cat', img: 'cat', nameAudio: 'cat', sound: 'cat' },
    { name: 'crab', img: 'crab', nameAudio: 'crab', sound: 'crab' },
  ];
}
