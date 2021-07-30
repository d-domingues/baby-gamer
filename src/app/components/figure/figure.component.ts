import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Animal } from 'src/models/animal';

@Component({
  selector: 'bbg-figure',
  styles: ['img { padding: 8%; }'],
  template: `
    <img [src]="'assets/animals/' + figure.name + '.svg'" (click)="onPlay()" />
    <ng-content></ng-content>
  `,
})
export class FigureComponent {
  @Input() figure: Animal;

  constructor(public player: PlayerService) {}

  onPlay = () => this.player.playByName(this.figure.name);
}
