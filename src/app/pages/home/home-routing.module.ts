import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsService } from 'src/app/services/animals.service';
import { FigureService } from 'src/app/services/figure.service';

import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', component: HomePage, resolve: [AnimalsService, FigureService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
