import { Component, QueryList, ViewChildren } from '@angular/core';

import { FigureService } from '../services/figure.service';
import { FlipCardComponent } from './flip-card/flip-card.component';

@Component({
  selector: 'fply-match-pairs',
  styleUrls: ['match-pairs.page.scss'],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> Pares </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="board">
        <fply-flip-card #card *ngFor="let figure of figures; let i = index" [figure]="figure" [cardIdx]="i">
        </fply-flip-card>
      </div>
    </ion-content>
  `,
})
export class MatchPairsPage {
  currentIdx: number = -1;

  figures = this.figService.getNShuffledPais(4);
  @ViewChildren('card') cards: QueryList<FlipCardComponent>;

  isViewBlocked = false;

  get currentFigure() {
    return this.figures[this.currentIdx];
  }

  get currentCard() {
    return this.cards.toArray()[this.currentIdx];
  }

  constructor(private figService: FigureService) {}
}
