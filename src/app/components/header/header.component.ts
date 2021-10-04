import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'bbg-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" (click)="onClosePage()">
          <ion-back-button [style.display]="'block'"></ion-back-button>
        </ion-buttons>

        <ion-title>
          <ng-content></ng-content>
        </ion-title>

        <ion-buttons *ngIf="showSettings" slot="end" (click)="onSettings.emit($event)">
          <ion-icon slot="icon-only" name="settings-outline" color="primary"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
})
export class HeaderComponent {
  @Input() showSettings = false;
  @Output() onSettings = new EventEmitter();

  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController, public player: PlayerService) {}

  onClosePage = () => this.modalCtrl.dismiss();
}
