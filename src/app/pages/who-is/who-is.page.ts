import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Figure } from '../models/figure';
import { FigureService } from '../services/figure.service';
import { PlayerService } from '../services/player.service';

@Component({
  templateUrl: 'who-is.page.html',
  styleUrls: ['who-is.page.scss'],
})
export class WhoIsPage {
  figures: Figure[];
  currentIdx: number;
  options: Figure[];

  constructor(
    private figService: FigureService,
    private player: PlayerService,
    private toastController: ToastController
  ) {
    this.figures = this.figService.getShuffledFigures();
    this.currentIdx = 0;
    this.setOptions();

    // todo: add , height=device-height to viewport at indext.html (test)
  }

  select(opt: Figure) {
    if (this.figures[this.currentIdx].id === opt.id) {
      console.log('correct');
      this.player.playByName('correct_answer.mp3', this.next.bind(this));
      this.presentToast();
    } else {
      this.player.playByName('wrong_answer.mp3');
    }
  }

  next() {
    this.currentIdx++;
    this.setOptions();
    this.toastController.dismiss('result_info');
  }

  setOptions() {
    const correctOpt = this.figures[this.currentIdx];
    const incorrectOpt = this.figService
      .getShuffledFigures()
      .filter((f) => f.id !== this.figures[this.currentIdx].id)[0];

    this.options = [correctOpt, incorrectOpt].sort(() => Math.random() - 0.5);
  }

  get progress() {
    return this.currentIdx / this.figures.length;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      id: 'result_info',
      header: 'Correto',
      position: 'middle',
      animated: true,
      cssClass: 'result-toast',
      // color: 'primary'
    });
    toast.present();
  }
}
