import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Host, Input } from '@angular/core';
import { Figure } from 'src/models/figure';

import { MatchPairsPage } from '../match-pairs.page';

@Component({
  selector: 'bbg-flip-card',
  styleUrls: ['flip-card.component.scss'],
  template: `
    <img bonbon class="face front" [src]="'assets/animals/' + figure.name + '.svg'" />
    <div bonbon class="face back-side"></div>
  `,
  animations: [
    trigger('cardFlip', [
      state('false', style({ transform: 'none' })),
      state('true', style({ transform: 'rotateY(180deg)' })),
      transition('false => true', animate('.3s')),
      transition('true => false', animate('.2s .5s')),
    ]),
  ],
  host: {
    '[@cardFlip]': 'flipped',
    '(click)': 'onClick()',
    '(@cardFlip.start)': 'host.isViewBlocked = true',
    '(@cardFlip.done)': 'host.checkAnswer($event, this)',
  },
})
export class FlipCardComponent {
  @Input() figure: Figure;
  @Input() cardIdx: number;
  flipped = false;
  matched = false;

  constructor(@Host() public host: MatchPairsPage) {}

  onClick() {
    if (this.flipped || this.host.isViewBlocked) {
      return;
    }

    this.onFlipCard();
  }

  onFlipCard() {
    this.flipped = !this.flipped;
  }
}
