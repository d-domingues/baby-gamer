import { AnimationEvent } from '@angular/animations';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FiguresService } from 'src/app/services/figures.service';

import { BasePage } from '../base-page';
import { FlipCardComponent } from './flip-card/flip-card.component';

@Component({
  selector: 'bbg-match-pairs',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Large-Triangles.svg) mistyrose;
        --card-height: calc(25% - 12px);
        --card-width: calc(50% - 6px);
      }

      .board {
        height: calc(100% - 38px);
        perspective: 1600px;
        display: grid;
        grid-template-columns: repeat(2, var(--card-width));
        grid-template-rows: repeat(4, var(--card-height));
        gap: 12px;
        margin: 12px;
      }
    `,
  ],
  template: `
    <bbg-header> Pares </bbg-header>

    <ion-content>
      <ion-progress-bar [value]="matchesCount / nrOfPairs"></ion-progress-bar>

      <div class="board">
        <bbg-flip-card #card *ngFor="let fig of animals; let i = index" [figure]="fig" [cardIdx]="i"> </bbg-flip-card>
      </div>
    </ion-content>
  `,
})
export class MatchPairsPage extends BasePage {
  nrOfPairs = 4;
  matchesCount = 0;
  currentIdx: number = -1;

  animals = this.animalService.getRandomPairs(this.nrOfPairs);
  @ViewChildren('card') cards: QueryList<FlipCardComponent>;

  isViewBlocked = false;

  get currentFigure() {
    return this.animals[this.currentIdx];
  }

  get currentCard() {
    return this.cards.toArray()[this.currentIdx];
  }

  constructor(private animalService: FiguresService) {
    super();
  }

  checkAnswer(ev: AnimationEvent, cardComponent: FlipCardComponent) {
    this.isViewBlocked = false;

    if (ev.fromState === 'void' || ev.fromState) {
      return;
    }

    // 1st move
    if (this.currentIdx === -1) {
      return (this.currentIdx = cardComponent.cardIdx);
    }

    // success
    if (this.currentFigure.fileName === cardComponent.figure.fileName) {
      this.player.playCorrect();
      cardComponent.matched = true;
      this.currentCard.matched = true;
      ++this.matchesCount === this.nrOfPairs && this.onClosePageWithSuccessMsg();
    }
    // failure
    else {
      this.player.playWrong();
      cardComponent.onFlipCard();
      this.currentCard.onFlipCard();
    }

    this.currentIdx = -1;
  }
}
