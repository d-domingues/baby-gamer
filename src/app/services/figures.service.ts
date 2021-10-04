import { Inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MultipleChoiceFigure } from 'src/models/multiple-choice-figure';

import { Figure } from '../../models/figure';
import { FAMILY, FIGURES } from './figures-list.injector';

@Injectable({ providedIn: 'root' })
export class FiguresService implements Resolve<any> {
  animals: Figure[] = [];
  family: Figure[] = [];

  constructor(@Inject(FIGURES) private figures: Promise<Figure[]>, @Inject(FAMILY) private familyPromise: Promise<Figure[]>) {}

  async resolve() {
    let req = await fetch('assets/data/animals.json');
    this.animals = await req.json();
    // this.animals.forEach((animal) => (new Image().src = animal.fileName));

    req = await fetch('assets/data/family.json');
    this.family = await req.json();
    // this.family.forEach((family) => (new Image().src = 'assets/family/' + family.fileName));

    return null;
  }

  getRandom = (n: number): Figure[] => this.animals.sort(() => 0.5 - Math.random()).slice(0, n);

  getRandomPairs = (n: number): Figure[] => {
    const rand = this.getRandom(n);
    return [...rand, ...rand].sort(() => 0.5 - Math.random());
  };

  getMultipleChoiseElements = (n = 5): MultipleChoiceFigure[] => {
    const elements: MultipleChoiceFigure[] = [];

    const randBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    const generateElements = () => {
      const options = this.getRandom(4);
      const answer = options[randBetween(0, 3)];
      return { answer, options };
    };

    while (elements.length < n) {
      const next = generateElements();
      if (!elements.find((e) => e.answer.fileName === next.answer.fileName)) {
        elements.push(next);
      }
    }

    return elements;
  };
}
