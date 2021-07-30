import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FigureModule } from 'src/app/components/figure/figure.module';

import { HeaderModule } from './../../components/header/header.module';
import { MultipleChoicePage } from './multiple-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MultipleChoicePage }]),
    HeaderModule,
    FigureModule,
  ],
  declarations: [MultipleChoicePage],
})
export class MultipleChoiceModule {}
