import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FamilyGalleryPage } from './family-gallery.page';

const routes: Routes = [{ path: '', component: FamilyGalleryPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FamilyGalleryPage],
})
export class FamilyGalleryPageModule {}
