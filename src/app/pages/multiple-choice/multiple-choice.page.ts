import { Component } from '@angular/core';
import { FiguresService } from 'src/app/services/figures.service';
import { MultipleChoiceFigure } from 'src/models/multiple-choice-figure';

import { BasePage } from '../base-page';

@Component({
  selector: 'bbg-multiple-choice',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Diamond-Sunset.svg);
      }

      .option {
        width: 80%;
        display: block;
        margin: 14px auto;
        text-align: left;
        text-transform: capitalize;
      }

      .option img {
        height: 30px;
        float: left;
        margin: -4px 6px -2px 2px;
      }

      .correct {
        border: solid 3px;
      }
    `,
  ],
  template: `
    <bbg-header> Escolha Multipla </bbg-header>
    <ion-content>
      <ion-progress-bar slot="fixed" [value]="iterator / figures.length"></ion-progress-bar>

      <bbg-figure [figure]="current.answer" height="calc(100% - 300px)"></bbg-figure>
      <button
        bonbon
        *ngFor="let animal of current.options; let i = index"
        [ngClass]="optionClass(i)"
        (click)="current.answer.fileName === animal.fileName ? onSuccess() : onFailure()"
      >
        <img [src]="'assets/animals/' + animal.name + '.svg'" />
        {{ animal.pt }}
      </button>
    </ion-content>
  `,
})
export class MultipleChoicePage extends BasePage {
  nrOfFigures = 5;
  iterator = 0;

  figures: MultipleChoiceFigure[] = this.animalServ.getMultipleChoiseElements(this.nrOfFigures);
  current = this.figures[this.iterator];

  constructor(private animalServ: FiguresService) {
    super();
  }

  optionClass = (optIdx: number) => ({
    option: true,
    [['orange', 'pink', 'blue', 'green'][optIdx]]: true,
    correct: this.current.answer.fileName === this.current.options[optIdx].fileName,
  });

  async onSuccess() {
    this.player.playCorrect();
    this.iterator++;

    if (this.iterator < this.figures.length) {
      setTimeout(() => (this.current = this.figures[this.iterator]), 450);
    } else {
      this.onClosePageWithSuccessMsg();
    }
  }

  onFailure() {
    this.player.playWrong();
  }
}
