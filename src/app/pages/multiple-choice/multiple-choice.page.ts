import { Component } from '@angular/core';
import { AnimalsService, MultipleChoiceElements } from 'src/app/services/animals.service';
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
    <bbg-figure [figure]="first.answer"></bbg-figure>
    <ion-content>
      <button
        bonbon
        class="option {{ colors[i] }}"
        *ngFor="let animal of first.options; let i = index"
        (click)="first.answer.id === animal.id ? onSuccess() : onFailure()"
      >
        {{ animal.pt }}
      </button>
    </ion-content>
  `,
})
export class MultipleChoicePage {
  colors = ['orange', 'pink', 'blue', 'green'];
  elements: MultipleChoiceElements[] =
    this.animalServ.getMultipleChoiseElements();

  first = this.elements[0];

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
