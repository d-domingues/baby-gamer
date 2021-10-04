import { animate, AnimationBuilder, query, style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';

import { BasePage } from '../base-page';
import { CupMovesService } from './cup-moves.service';

@Component({
  selector: 'bbg-shuffle-cups',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Large-Triangles.svg) mistyrose;

        .cup,
        .ball {
          position: absolute;
          left: 50%;
        }

        .cup {
          width: 20%;
          opacity: 0;
        }

        .ball {
          transform: translateX(-50%);
          max-width: 10%;
        }

        .pos1 {
          top: 35%;
        }

        .pos2 {
          top: 55%;
        }

        .pos3 {
          top: 75%;
        }
      }
    `,
  ],

  template: `
    <bbg-header [showSettings]="true" (onSettings)="onSettings()"> Onde está a bola? </bbg-header>

    <ion-content>
      <ion-button expand="block" fill="solid" shape="round" color="light" [disabled]="cupState != 'unshuffled'" (click)="onPlay()">
        play
      </ion-button>
      <img class="ball pos2" src="assets/img/ball.png" />
      <img class="cup pos1" src="assets/img/cup.png" (click)="onOpen(false)" />
      <img class="cup pos2" src="assets/img/cup.png" (click)="onOpen(true)" />
      <img class="cup pos3" src="assets/img/cup.png" (click)="onOpen(false)" />
    </ion-content>
  `,
})
export class ShuffleCupsPage extends BasePage {
  cupState: 'unshuffled' | 'shuffling' | 'shuffled' | 'open' = 'unshuffled';
  difficulty: 'easy' | 'medium' | 'hard' | 'insane' = 'easy';

  constructor(private builder: AnimationBuilder, private el: ElementRef, private cupMoves: CupMovesService) {
    super();
  }

  onPlay() {
    let nrOfMoves: number;
    let timings: string;

    switch (this.difficulty) {
      case 'easy':
        nrOfMoves = 5;
        timings = '.65s';
        break;
      case 'hard':
        nrOfMoves = 10;
        timings = '.3s';
        break;
      case 'medium':
        nrOfMoves = 15;
        timings = '.25s';
        break;
      case 'insane':
        nrOfMoves = 18;
        timings = '.22s';
        break;
    }

    const { moves, order } = this.cupMoves.generateMoves(nrOfMoves, timings);
    console.log(order);
    const animation = this.builder.build(moves).create(this.el.nativeElement);
    animation.onStart(() => (this.cupState = 'shuffling'));
    animation.onDone(() => (this.cupState = 'shuffled'));
    animation.play();
  }

  onOpen(hasBall: boolean) {
    if (this.cupState === 'shuffled') {
      const animation = this.builder
        .build(query('.cup', animate('1s', style({ opacity: 0, transform: 'translate(-50%,-100%)' }))))
        .create(this.el.nativeElement);
      animation.onDone(() => {
        hasBall && this.onClosePageWithSuccessMsg();
        this.cupState = 'open';
      });
      animation.play();
    }
  }

  onSettings() {
    const levels = ['easy', 'medium', 'hard', 'insane'];

    this.alertCtrl
      .create({
        header: 'Dificuldade',
        inputs: levels.map((value) => ({ value, label: value, type: 'radio', checked: value === this.difficulty })),
        buttons: [
          { text: 'Cancelar', role: 'cancel' },
          { text: 'Ok', handler: (difficulty) => (this.difficulty = difficulty) },
        ],
      })
      .then((alert) => alert.present());
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: ShuffleCupsPage }]), HeaderModule],
  declarations: [ShuffleCupsPage],
})
export class ShffleCupsModule {}
