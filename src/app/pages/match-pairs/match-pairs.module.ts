import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderModule } from './../../components/header/header.module';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { MatchPairsPage } from './match-pairs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: MatchPairsPage }]),
    HeaderModule,
  ],
  declarations: [MatchPairsPage, FlipCardComponent],
})
export class MatchPairsModule {}
