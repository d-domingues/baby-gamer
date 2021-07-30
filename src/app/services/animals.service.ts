import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Animal } from '../../models/animal';

@Injectable({ providedIn: 'root' })
export class AnimalsService implements Resolve<Promise<Animal[]>> {
  private animals: Animal[] = [];

  async resolve() {
    if (!this.animals.length) {
      const req = await fetch('assets/animals/animals.json');
      this.animals = await req.json();

      this.animals.forEach(
        (animal) => (new Image().src = 'assets/animals/' + animal.name + '.svg')
      );
    }

    this.animals;
    return this.animals;
  }

  getRandom = (n: number): Animal[] =>
    this.animals.sort(() => 0.5 - Math.random()).slice(0, n);

  getRandomPairs = (n: number): Animal[] => {
    const rand = this.getRandom(n);
    return [...rand, ...rand].sort(() => 0.5 - Math.random());
  };

  getMultipleChoiseElements = (n = 5): MultipleChoiceElements[] => {
    const elements: MultipleChoiceElements[] = [];

    const randBetween = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const generateElements = () => {
      const options = this.getRandom(4);
      const answer = options[randBetween(0, 3)];
      return { answer, options };
    };

    while (elements.length < n) {
      const next = generateElements();
      if (!elements.find((e) => e.answer.id === next.answer.id)) {
        elements.push(next);
      }
    }

    return elements;
  };
}

export interface MultipleChoiceElements {
  answer: Animal;
  options: Animal[];
}
