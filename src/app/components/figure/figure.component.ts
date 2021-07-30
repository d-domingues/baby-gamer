import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'bbg-figure',
  styles: ['img { padding: 8%; }'],
  template: `
    <img [src]="'assets/animals/' + figure + '.svg'" (click)="onPlay()" />
  `,
})
export class FigureComponent {
  @Input() figure: string;
  @Input() text?: string;

  constructor(public player: PlayerService) {}

  onPlay = () => this.player.playByName(this.figure);
}
