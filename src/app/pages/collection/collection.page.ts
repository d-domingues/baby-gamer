import { Component } from '@angular/core';
import { Figure } from 'src/models/figure';

import { AnimalsService } from './../../services/animals.service';
import { BasePage } from './../base-page';

@Component({
  selector: 'bbg-collection',
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 6px;
        margin: 6px;
      }

      .animal-name {
        font-size: 14px;
        text-align: center;
        margin-top: -5px;
        margin-bottom: 5px;
        text-transform: capitalize;
        line-height: 12px;
      }
    `,
  ],
  template: `
    <bbg-header> Coleção </bbg-header>

    <ion-content scrollY="true">
      <div class="grid">
        <bbg-figure bonbon *ngFor="let animal of animals" [figure]="animal">
          <div class="animal-name">{{ animal.pt }}</div>
        </bbg-figure>
      </div>
    </ion-content>
  `,
})
export class CollectionPage extends BasePage {
  animals: Figure[] = this.figService.animals;

  constructor(public figService: AnimalsService) {
    super();
  }
}
