import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FigureComponent } from 'src/components/figure/figure.component';
import { FigureModule } from 'src/components/figure/figure.module';

import { GalleryPicComponent } from './gallery-pic/gallery-pic.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPage } from './gallery.page';

@NgModule({
  imports: [CommonModule, IonicModule, FigureModule, GalleryRoutingModule],
  exports: [FigureComponent],
  declarations: [GalleryPage, GalleryPicComponent],
})
export class GalleryModule {}
