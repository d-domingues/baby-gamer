import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { WhatAnimalIsItPage } from '../what-animal-is-it/what-animal-is-it.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async onClick() {
    (await this.modalCtrl.create({ component: WhatAnimalIsItPage })).present();
  }
}
