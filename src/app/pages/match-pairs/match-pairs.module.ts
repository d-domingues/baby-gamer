import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FigureModule } from '../components/figure/figure.module';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { MatchPairsPage } from './match-pairs.page';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: MatchPairsPage }]), IonicModule, CommonModule, FigureModule],
  declarations: [MatchPairsPage, FlipCardComponent],
})
export class MatchPairsModule {}
