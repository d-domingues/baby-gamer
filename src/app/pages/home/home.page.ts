import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
import { FiguresService } from 'src/app/services/figures.service';

import { CollectionPage } from '../collection/collection.page';
import { FamilyGalleryPage } from '../family-gallery/family-gallery.page';
import { MatchPairsPage } from '../match-pairs/match-pairs.page';
import { OrganizePage } from '../organize/organize.page';
import { ShuffleCupsPage } from '../shuffle-cups/shuffle-cups.module';
import { TestsPage } from '../tests-page.page';
import { MultipleChoicePage } from './../multiple-choice/multiple-choice.page';

@Component({
  selector: 'bbg-home',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Colorful-Stingrays.svg);
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 12px;
        gap: 10px;
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

      <img src="assets/img/masha.png" alt="" />
    </ion-content>
  `,
})
export class HomePage {
  apps = [
    { name: 'Tests', component: TestsPage },
    { name: 'Shuffle Cups', component: ShuffleCupsPage },
    { name: 'Family Gallery', component: FamilyGalleryPage },
    { name: 'Match Pairs', component: MatchPairsPage },
    { name: 'Multiple Choice', component: MultipleChoicePage },
    { name: 'Collection', component: CollectionPage },
    { name: 'Organize', component: OrganizePage },
  ];

  constructor(private modalCtrl: ModalController, public figServ: FiguresService, public file: File) {}

  onOpenApp = ({ component }) => this.modalCtrl.create({ component }).then((m) => m.present());

  //{
  // console.log(this.file);
  /*     this.file
      .listDir(this.file.applicationDirectory, 'public/assets/audio')
      .then((entries) => entries.map((e) => e.name)); */
  //  Filesystem.readdir();
  // };
}
