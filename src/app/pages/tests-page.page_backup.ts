import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GestureController, IonicModule, Platform } from '@ionic/angular';

import { HeaderModule } from '../components/header/header.module';
import { BasePage } from './base-page';

@Component({
  selector: 'bbg-tests',
  styles: [
    `
      /*       .progressbar-wrapper {
        --height: 150px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: var(--height);

        .progressbar {
          width: inherit;
          height: inherit;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(-30deg);
        }

        .side {
          width: inherit;
          height: inherit;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(254, 254, 254, 0.3);
          box-shadow: 1px 0px 1px 1px rgb(90 90 90 / 15%);
        }

        .bottom {
          box-shadow: 10px 10px 50px 5px rgba(90, 90, 90, 0.7);
          transform: rotateX(90deg);
          transform-origin: bottom;
        }

        .top {
          transform: translate(0, -100%) rotateX(90deg);
          transform-origin: bottom;
        }

        .back {
          transform: translateZ(calc(-1 * var(--height)));
        }

        .left {
          width: var(--height);
          transform: rotateY(90deg);
          transform-origin: left;
          background-color: rgba(225, 0, 120, 0.6);
        }

        .right {
          width: var(--height);
          transform: rotateY(90deg);
          transform-origin: left;
          background-color: rgba(225, 0, 120, 0.6);
        }

        .bar {
          width: 80%;
          height: inherit;
          background-color: rgba(225, 0, 120, 0.6);
          box-shadow: 5px 5px 50px 5px rgba(225, 0, 120, 0.3);
        }
      } */

      @keyframes turn {
        from {
          transform: rotate3d(0, 0, 0, 0);
        }
        to {
          transform: rotate3d(1, 1, 0, 360deg);
        }
      }

      .container {
        width: 200px;
        height: 200px;
        perspective: 500px;
        margin: 100px;
      }

      .cube {
        position: relative;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        animation: turn 5s linear infinite;
      }

      .face {
        width: 200px;
        height: 200px;
        background: skyblue;
        border: 2px solid black;
        position: absolute;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        font-size: 2rem;
        transition: transform 500ms;
      }

      .front {
        transform: translateZ(100px);
      }

      .back {
        transform: translateZ(-100px) rotateY(180deg);
      }

      .left {
        transform: translateX(-100px) rotateY(-90deg);
      }

      .right {
        transform: translateX(100px) rotateY(90deg);
      }

      .top {
        transform: translateY(-100px) rotateX(90deg);
      }

      .bottom {
        transform: translateY(100px) rotateX(-90deg);
      }

      @media (prefers-reduced-motion: reduce) {
        .cube {
          animation: none;
          transform: rotate3d(1, 1, 0, 45deg);
        }
      }
    `,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>tests</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!--      <div class="progressbar-wrapper">
        <div class="progressbar">
          <div class="side front">
            <div class="bar"></div>
          </div>
          <div class="side back">
            <div class="bar"></div>
          </div>
          <div class="side top">
            <div class="bar"></div>
          </div>
          <div class="side bottom">
            <div class="bar"></div>
          </div>
          <div class="side left"></div>
        </div>
      </div> -->

      <div class="container">
        <div class="cube">
          <div class="face top">Top</div>
          <div class="face bottom">Bottom</div>
          <div class="face left">Left</div>
          <div class="face right">Right</div>
          <div class="face front">Front</div>
          <div class="face back">Back</div>
        </div>
      </div>
    </ion-content>
  `,
})
export class TestsPage {
  constructor(private plat: Platform) {
    this.plat.ready().then(() => {
      //   const antImg = (new Image().src = 'assets/animals/ant.svg');
      console.log(plat.width());
    });
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: TestsPage }]), HeaderModule],
  declarations: [TestsPage],
})
export class TestsPageModule {}

@Component({
  selector: 'bbg-tests',
  styles: [
    `
      ion-content {
        --background: url(/assets/wallpapers/Large-Triangles.svg) mistyrose;
      }

      @keyframes turn {
        from {
          transform: rotate3d(0, 0, 0, 0);
        }
        to {
          transform: rotate3d(1, 1, 0, 360deg);
        }
      }

      @keyframes zoom {
        from {
          transform: scale(1) translate(-50%, -50%);
        }
        to {
          transform: scale(2) translate(-25%, -25%);
        }
      }

      @keyframes orbit {
        from {
          transform: rotate(0deg) translateX(50px) rotate(0deg);
        }
        to {
          transform: rotate(360deg) translateX(50px) rotate(-360deg);
        }
      }

      .container {
        --size: 50px;

        width: calc(2 * var(--size));
        height: calc(2 * var(--size));
        perspective: 500px;

        .cube {
          width: calc(2 * var(--size));
          height: calc(2 * var(--size));
          transform-style: preserve-3d;
          animation: orbit 4s linear infinite;
          /*  animation: turn 5s linear infinite; */

          .face {
            width: calc(2 * var(--size));
            height: calc(2 * var(--size));
            background: skyblue;
            border: 2px solid black;
            position: absolute;
            opacity: 0.5;
          }

          .front {
            transform: translateZ(var(--size));
          }

          .back {
            transform: translateZ(calc(-1 * var(--size))) rotateY(180deg);
          }

          .left {
            transform: translateX(calc(-1 * var(--size))) rotateY(-90deg);
          }

          .right {
            transform: translateX(var(--size)) rotateY(90deg);
          }

          .top {
            transform: translateY(calc(-1 * var(--size))) rotateX(90deg);
          }

          .bottom {
            transform: translateY(var(--size)) rotateX(-90deg);
          }
        }

        /* if animations are disabled */
        @media (prefers-reduced-motion: reduce) {
          .cube {
            animation: none;
            transform: rotate3d(1, 1, 0, 45deg);
          }
        }
      }
    `,
  ],
  template: `
    <bbg-header> Tests </bbg-header>

    <ion-content>
      <img src="assets/img/cup.jpg" alt="" />
      <div class="container" #container>
        <div class="cube" #cube>
          <div class="face top">Top</div>
          <div class="face bottom">Bottom</div>
          <div class="face left">Left</div>
          <div class="face right">Right</div>
          <div class="face front">Front</div>
          <div class="face back">Back</div>
        </div>
      </div>
    </ion-content>
  `,
})
export class TestsPage extends BasePage {
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  @ViewChild('cube') cube: ElementRef<HTMLDivElement>;

  constructor(private gestureCtrl: GestureController) {
    super();
  }

  ngAfterViewInit() {
    let headerHeight = 0;
    const el = this.container.nativeElement;
    const cubeEl = this.cube.nativeElement;

    el.style.position = 'absolute';
    el.style.transform = 'translate(-50%, -50%)';

    this.gestureCtrl
      .create({
        el,
        threshold: 0,
        gestureName: 'drag',
        onStart: () => {
          headerHeight = document.querySelector('bbg-header').clientHeight;

          el.style.animation = 'zoom 0.5s linear';
          el.style.transform = 'scale(2) translate(-25%, -25%)';

          //          el.style.transform = 'scale(2) translate(-25%, -25%)';
          //  cubeEl.style.animation = 'turn 5s linear infinite';
        },
        onMove: (ev) => {
          el.style.left = ev.currentX + 'px';
          el.style.top = ev.currentY - headerHeight + 'px';
          el.style.transform = 'scale(2) translate(-25%, -25%)';
        },
        onEnd: (ev) => {
          el.style.animation = '';
          el.style.transform = 'translate(-50%, -50%)';
        },
      })
      .enable();
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: TestsPage }]), HeaderModule],
  declarations: [TestsPage],
})
export class TestsPageModule {}
