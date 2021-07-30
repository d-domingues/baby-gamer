import { Injectable } from '@angular/core';
import { Figure } from 'src/models/figure';

@Injectable({ providedIn: 'root' })
export class FigureService {
  figures: Figure[] = [];

  constructor() {
    fetch('assets/data/family.json')
      .then((resp) => resp.json())
      .then((resp) => (this.figures = resp));
  }

  shuffleFigures = (figures: Figure[]) =>
    figures.sort(() => Math.random() - 0.5);

  getShuffledFigures = () => this.shuffleFigures(this.figures);

  getNShuffledPais = (n: number) => {
    const shuffled = this.getShuffledFigures();
    const figs = shuffled.slice(0, n);
    const pairs = [...figs, ...figs];
    return this.shuffleFigures(pairs);
  };
}
