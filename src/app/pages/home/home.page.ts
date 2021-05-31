import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
import { FigureService } from 'src/app/services/figure.service';

import { FamilyGalleryPage } from '../family-gallery/family-gallery.page';

@Component({
  selector: 'bbg-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private modalCtrl: ModalController,
    public figServ: FigureService,
    public file: File
  ) {}

  onClick = () =>
    this.modalCtrl
      .create({ component: FamilyGalleryPage })
      .then((m) => m.present());

  onTest = () => {
    // console.log(this.file);
    this.file
      .listDir(this.file.applicationDirectory, 'public/assets/audio')
      .then((entries) => entries.map((e) => e.name));
  };
}
