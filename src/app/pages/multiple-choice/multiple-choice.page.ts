import { Component } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'bbg-multiple-choice',
  styles: [
    `
      .option {
        width: 80%;
        display: block;
        margin: 14px auto;
        text-align: center;
        text-transform: capitalize;
      }
    `,
  ],
  template: `
    <bbg-header></bbg-header>
    <ion-progress-bar value="0.5"></ion-progress-bar>
    <bbg-figure [figure]="animals[correctAnswer]"></bbg-figure>
    <ion-content>
      <button
        bonbon
        class="option {{ colors[i] }}"
        *ngFor="let animal of animals; let i = index"
        (click)="i === correctAnswer ? onSuccess() : onFailure()"
      >
        {{ animal }}
      </button>

      {{ elements | json }}
    </ion-content>
  `,
})
export class MultipleChoicePage {
  colors = ['orange', 'pink', 'blue', 'green'];
  animals = this.animalServ.getRandom(4);
  correctAnswer = this.animalServ.randBetween(0, 3);

  elements = this.animalServ.getMultipleChoiseElements();

  constructor(
    private animalServ: AnimalsService,
    private player: PlayerService
  ) {}

  onSuccess = () => {
    this.player.playCorrect();
  };
  onFailure = () => {
    this.player.playWrong();
  };
}
