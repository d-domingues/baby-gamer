import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Figure } from 'src/models/figure';

@Component({
  selector: 'bbg-figure',
  styles: ['img { padding: 8%; }'],
  template: `
    <img [style.height]="height" [src]="figure.fileName" (click)="player.play(figure.sound)" />
    <ng-content></ng-content>
  `,
})
export class FigureComponent {
  @Input() figure: Figure;
  @Input() height: string;

  constructor(public player: PlayerService) {}
}
