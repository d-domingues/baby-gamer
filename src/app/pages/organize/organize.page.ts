import { Component } from '@angular/core';

import { BasePage } from './../base-page';

@Component({
  selector: 'bbg-organize',
  styles: [
    `
      ion-content {
        --background: mistyrose;
      }

      .board {
        height: 100%;
      }

      .box {
        width: clamp(5%, 25%, 25vh);
      }
    `,
  ],
  template: `
    <bbg-header> Organiza </bbg-header>

    <ion-content scrollY="false">
      <ion-progress-bar slot="fixed" [value]="dropCount / nrOfBalls"></ion-progress-bar>

      <div class="board" bbgDragDropHost (dropped)="onDrop($event)">
        <svg *ngFor="let ball of balls" [bbgDraggable]="ball" [position]="ball.position" width="68" height="68">
          <circle cx="34" cy="34" r="30" stroke="black" stroke-width="2" [attr.fill]="ball.color" />
        </svg>
        <bbg-drop-box
          *ngFor="let box of boxes"
          class="box"
          [bbgDroppable]="box"
          [position]="box.position"
          [filter]="filter"
          [fill]="box.color"
          [totalBalls]="box.totalBalls"
        ></bbg-drop-box>
      </div>
    </ion-content>
  `,
})
export class OrganizePage extends BasePage {
  nrOfBalls = 20;
  dropCount = 0;

  colors = ['deepskyblue', 'palevioletred', 'purple', 'yellow'];

  balls = Array.from(Array(this.nrOfBalls).keys()).map(() => ({
    color: this.colors[Math.floor(Math.random() * this.colors.length)],
    position: { top: `${Math.floor(Math.random() * 76)}%`, left: `${Math.floor(Math.random() * 101)}%` },
  }));

  boxes = this.colors.map((color, idx) => ({
    color,
    position: { bottom: 0, left: ['12.5%', '37.5%', '62.5%', '87.5%'][idx] },
    totalBalls: this.balls.filter((b) => b.color === color).length,
  }));

  filter = (ball: any, box: any) => ball.bbgDraggable.color === box.bbgDroppable.color;

  onDrop({ draggable }) {
    this.player.playCorrect2();
    draggable.el.style.display = 'none';
    ++this.dropCount === this.nrOfBalls && this.onClosePageWithSuccessMsg();
  }
}
