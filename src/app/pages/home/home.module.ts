import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { IonicModule } from '@ionic/angular';
import { AnimalsService } from 'src/app/services/animals.service';

import { WhatAnimalIsItPage } from '../what-animal-is-it/what-animal-is-it.page';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: HomePage, resolve: [AnimalsService] },
    ]),
  ],
  declarations: [HomePage, WhatAnimalIsItPage],
  providers: [NativeAudio, SpeechRecognition],
})
export class HomePageModule {}
