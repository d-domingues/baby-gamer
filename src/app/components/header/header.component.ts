import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'bbg-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            [style.display]="'block'"
            (click)="modalCtrl.dismiss()"
          ></ion-back-button>
        </ion-buttons>
        <ion-title> --- </ion-title>
      </ion-toolbar>
    </ion-header>
  `,
})
export class HeaderComponent {
  constructor(public modalCtrl: ModalController) {}
}
