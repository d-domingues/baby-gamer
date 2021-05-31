import { Component } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'bbg-what-animal-is-it',
  templateUrl: './what-animal-is-it.page.html',
  styleUrls: ['./what-animal-is-it.page.scss'],
})
export class WhatAnimalIsItPage {
  options = this.animals.getRandom(4);

  constructor(private animals: AnimalsService) {}
}
