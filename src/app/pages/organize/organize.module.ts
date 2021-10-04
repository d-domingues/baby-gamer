import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DirectivesModule } from 'src/app/directives/directives.module';

import { HeaderModule } from './../../components/header/header.module';
import { DropBoxComponent } from './drop-box.component';
import { OrganizePage } from './organize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: OrganizePage }]),
    HeaderModule,
    DirectivesModule,
    DragDropModule,
  ],
  declarations: [OrganizePage, DropBoxComponent],
})
export class OrganizeModule {}
