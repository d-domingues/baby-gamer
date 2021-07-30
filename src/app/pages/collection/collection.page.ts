import { Component } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'bbg-collection',
  styleUrls: ['./collection.page.scss'],
  template: `
    <bbg-header></bbg-header>

    <ion-content>
      <div class="grid">
        <bbg-figure
          bonbon
          *ngFor="let animal of animalService.animals"
          [figure]="animal"
        ></bbg-figure>
      </div>
    </ion-content>
  `,
})
export class CollectionPage {
  constructor(public animalService: AnimalsService) {}
}
