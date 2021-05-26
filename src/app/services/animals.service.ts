import { Injectable } from '@angular/core';

import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor() {}

  getRandom = (qty: number): Animal[] => [
    { name: 'fish', img: 'fish', nameAudio: 'fish', sound: 'fish' },
    { name: 'camel', img: 'camel', nameAudio: 'camel', sound: 'camel' },
    { name: 'cat', img: 'cat', nameAudio: 'cat', sound: 'cat' },
    { name: 'crab', img: 'crab', nameAudio: 'crab', sound: 'crab' },
  ];
}
