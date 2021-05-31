import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WhatAnimalIsItPage } from './what-animal-is-it.page';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: WhatAnimalIsItPage }])],
  declarations: [WhatAnimalIsItPage],
})
export class WhatAnimalIsItModule {}
