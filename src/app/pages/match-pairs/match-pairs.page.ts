import { Component, QueryList, ViewChildren } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';

import { FlipCardComponent } from './flip-card/flip-card.component';

@Component({
  selector: 'bbg-match-pairs',
  styleUrls: ['match-pairs.page.scss'],
  template: `
    <bbg-header></bbg-header>

    <ion-content>
      <div class="board">
        <bbg-flip-card
          #card
          *ngFor="let fig of animals; let i = index"
          [figure]="fig"
          [cardIdx]="i"
        >
        </bbg-flip-card>
      </div>
    </ion-content>
  `,
})
export class MatchPairsPage {
  currentIdx: number = -1;

  animals = this.animalService.getRandomPairs(4);
  @ViewChildren('card') cards: QueryList<FlipCardComponent>;

  isViewBlocked = false;

  get currentFigure() {
    return this.animals[this.currentIdx];
  }

  get currentCard() {
    return this.cards.toArray()[this.currentIdx];
  }

  constructor(private animalService: AnimalsService) {}
}
