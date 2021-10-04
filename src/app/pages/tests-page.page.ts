import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderModule } from './../components/header/header.module';
import { BasePage } from './base-page';

@Component({
  selector: 'bbg-tests',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Large-Triangles.svg) mistyrose;
      }
    `,
  ],

  template: `
    <bbg-header> Tests </bbg-header>

    <ion-content>
      <img src="assets/img/puzzle1.jpg" />
    </ion-content>
  `,
})
export class TestsPage extends BasePage {
  constructor() {
    super();
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: TestsPage }]), HeaderModule],
  declarations: [TestsPage],
})
export class TestsPageModule {}
