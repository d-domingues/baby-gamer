import { Component, Input } from '@angular/core';
import { Figure } from 'src/app/models/figure';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'fun-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent {
  @Input() figure: Figure;
  @Input() text?: string;

  constructor(private player: PlayerService) {}

  play() {
    this.player.play(this.figure.soundSrc);
  }
}
