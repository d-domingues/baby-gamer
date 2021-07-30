import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AudioService {
  constructor(
    private platform: Platform,
    private file: File,
    private nativeAudio: NativeAudio
  ) {
    /*  if (this.platform.is('android')) {
      this.file
        .listDir(this.file.applicationDirectory, 'public/assets/audio')
        .then((entries) =>
          entries.map((e) =>
            this.nativeAudio.preloadSimple(
              e.name.replace(/\.[^/.]+$/, ''),
              e.fullPath.substring(1)
            )
          )
        );
    } */
  }
}
