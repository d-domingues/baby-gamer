import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // BrowserAnimationsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpeechRecognition,
    NativeAudio,
    File,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
