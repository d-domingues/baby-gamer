import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { IonicModule } from '@ionic/angular';
import { FiguresService } from 'src/app/services/figures.service';

import { AnimalsService } from './../../services/animals.service';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage, resolve: [FiguresService, AnimalsService] }]),
  ],
  declarations: [HomePage],
  providers: [NativeAudio, SpeechRecognition],
})
export class HomePageModule {}
