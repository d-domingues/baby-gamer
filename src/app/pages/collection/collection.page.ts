import { Component } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';
import { Animal } from 'src/models/animal';

@Component({
  selector: 'bbg-collection',
  styleUrls: ['./collection.page.scss'],
  template: `
    <bbg-header></bbg-header>

    <ion-content>
      <div class="grid">
        <bbg-figure bonbon *ngFor="let animal of animals" [figure]="animal">
          <div class="animal-name">{{ animal.pt }}</div>
        </bbg-figure>
      </div>
    </ion-content>
  `,
})
export class CollectionPage {
  animals: Animal[] = [];

  constructor(public animalService: AnimalsService) {
    animalService.resolve().then((animals) => (this.animals = animals));
  }
}
