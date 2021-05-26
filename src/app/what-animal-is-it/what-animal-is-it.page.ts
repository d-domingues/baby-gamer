import { Component } from '@angular/core';

import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-what-animal-is-it',
  templateUrl: './what-animal-is-it.page.html',
  styleUrls: ['./what-animal-is-it.page.scss'],
})
export class WhatAnimalIsItPage {
  options = this.animals.getRandom(4);

  constructor(private animals: AnimalsService) {}
}
