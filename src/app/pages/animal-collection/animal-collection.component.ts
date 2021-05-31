import { Component } from '@angular/core';

import { AnimalsService } from '../../app/services/animals.service';

@Component({
  selector: 'app-animal-collection',
  templateUrl: './animal-collection.component.html',
  styleUrls: ['./animal-collection.component.scss'],
})
export class AnimalCollectionComponent {
  constructor(public animalsService: AnimalsService) {}
}
