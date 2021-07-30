import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
import { FigureService } from 'src/app/services/figure.service';

import { CollectionPage } from '../collection/collection.page';
import { FamilyGalleryPage } from '../family-gallery/family-gallery.page';
import { MatchPairsPage } from '../match-pairs/match-pairs.page';
import { MultipleChoicePage } from '../multiple-choice/multiple-choice.page';

@Component({
  selector: 'bbg-home',
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 12px;
        gap: 10px;
      }

      .wrapper {
        width: 100%;
        min-height: 800px;
        position: absolute;
        display: block;
      }
      .progressbar-wrapper {
        width: 300px;
        height: 60px;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .progressbar {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateX(-20deg) rotateY(-30deg);
      }
      .side {
        width: 100%;
        height: 100%;
        background-color: rgba(254, 254, 254, 0.3);
        top: 0;
        left: 0;
        position: absolute;
      }
      .bottom {
        box-shadow: 10px 10px 50px 5px rgba(90, 90, 90, 0.7);
        transform: rotateX(90deg);
        transform-origin: bottom;
      }
      .top {
        transform: translate(0, -100%) rotateX(90deg);
        transform-origin: bottom;
      }
      .back {
        transform: translateZ(-60px);
      }
      .left {
        width: 60px;
        transform: rotateY(90deg);
        transform-origin: left;
        background-color: rgba(225, 0, 120, 0.6);
      }
      .bar {
        height: 100%;
        background-color: rgba(225, 0, 120, 0.6);
        box-shadow: 5px 5px 50px 5px rgba(225, 0, 120, 0.3);
        width: 70%;
      }
    `,
  ],
  template: `
    <ion-content [fullscreen]="true">
      <div class="grid">
        <button *ngFor="let app of apps" bonbon (click)="onOpenApp(app)">
          {{ app.name }}
        </button>
      </div>

      <div class="wrapper">
        <div class="progressbar-wrapper">
          <div class="progressbar">
            <div class="side front">
              <div class="bar"></div>
            </div>
            <div class="side back">
              <div class="bar"></div>
            </div>
            <div class="side top">
              <div class="bar"></div>
            </div>
            <div class="side bottom">
              <div class="bar"></div>
            </div>
            <div class="side left"></div>
          </div>
        </div>
      </div>
    </ion-content>
  `,
})
export class HomePage {
  apps = [
    { name: 'Family Gallery', component: FamilyGalleryPage },
    { name: 'Match Pairs', component: MatchPairsPage },
    { name: 'Collection', component: CollectionPage },
    { name: 'Multiple Choice', component: MultipleChoicePage },
  ];

  constructor(
    private modalCtrl: ModalController,
    public figServ: FigureService,
    public file: File
  ) {}

  onOpenApp = ({ component }) =>
    this.modalCtrl.create({ component }).then((m) => m.present());

  //{
  // console.log(this.file);
  /*     this.file
      .listDir(this.file.applicationDirectory, 'public/assets/audio')
      .then((entries) => entries.map((e) => e.name)); */
  //  Filesystem.readdir();
  // };
}
