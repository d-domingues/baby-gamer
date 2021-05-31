import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { IonicModule } from '@ionic/angular';

import { WhatAnimalIsItPage } from '../what-animal-is-it/what-animal-is-it.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, WhatAnimalIsItPage],
  providers: [NativeAudio, SpeechRecognition],
})
export class HomePageModule {}
