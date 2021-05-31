import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private player: Howl = null;
  private isPlaying = false;
  private activeSoundSrc: string;

  private mp3AssetsPath = '../../../assets/mp3/';

  constructor() {}

  play(soundSrc: string, calbackFn?: () => void) {
    if (this.isPlaying) {
      return;
    }

    this.player = new Howl({
      src: [soundSrc],
      onplay: () => {
        this.isPlaying = true;
        this.activeSoundSrc = soundSrc;
      },
      onend: () => {
        this.isPlaying = false;
        if (calbackFn) {
          calbackFn();
        }
      },
    });

    this.player.play();
  }

  playByName(audioName: string, calbackFn?: () => void) {
    this.play(this.mp3AssetsPath + audioName, calbackFn);
  }

  playCorrect = () => this.playByName('correct_answer.mp3');
  playWrong = () => this.playByName('wrong_answer.mp3');
}
