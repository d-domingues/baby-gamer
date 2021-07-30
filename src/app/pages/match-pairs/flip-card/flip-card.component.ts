import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, Host, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

import { MatchPairsPage } from '../match-pairs.page';

@Component({
  selector: 'bbg-flip-card',
  styleUrls: ['flip-card.component.scss'],
  template: `
    <img
      bonbon
      class="face front"
      [src]="'assets/animals/' + figure + '.svg'"
    />
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
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[@cardFlip]': 'flipped',
    '(click)': 'onClick()',
    '(@cardFlip.start)': 'host.isViewBlocked = true',
    '(@cardFlip.done)': 'animDone($event)',
  },
})
export class FlipCardComponent {
  @Input() figure: string;
  @Input() cardIdx: number;
  flipped = false;
  matched = false;

  constructor(
    @Host() public host: MatchPairsPage,
    private player: PlayerService
  ) {}

  onClick() {
    if (this.flipped || this.host.isViewBlocked) {
      return;
    }

    this.onFlipCard();
  }

  onFlipCard() {
    this.flipped = !this.flipped;
  }

  animDone(ev: AnimationEvent) {
    this.host.isViewBlocked = false;

    if (ev.fromState === 'void' || ev.fromState) {
      return;
    }

    // 1st move
    if (this.host.currentIdx === -1) {
      return (this.host.currentIdx = this.cardIdx);
    }

    // success
    if (this.host.currentFigure === this.figure) {
      this.player.playCorrect();
      this.matched = true;
      this.host.currentCard.matched = true;
    }
    // failure
    else {
      this.player.playWrong();
      this.onFlipCard();
      this.host.currentCard.onFlipCard();
    }

    this.host.currentIdx = -1;
  }
}
