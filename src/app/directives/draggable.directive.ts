import { Directive, ElementRef, Input, Optional } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';

import { DragDropHostDirective } from './drag-drop-host.directive';

@Directive({ selector: '[bbgDraggable]' })
export class DraggableDirective {
  @Input() bbgDraggable: any;
  @Input() position: any = { top: '50%', left: '50%' };

  el = this.elRef.nativeElement;

  constructor(
    private gestureCtrl: GestureController,
    public elRef: ElementRef<SVGSVGElement | HTMLElement>,
    @Optional() private host?: DragDropHostDirective
  ) {
    this.createGesture().enable();
  }

  ngOnInit() {
    this.el.style.position = 'absolute';
    this.el.style.top = this.position.top;
    this.el.style.left = this.position.left;
    this.el.style.bottom = this.position.bottom;
    this.el.style.right = this.position.right;
    this.el.style.transform = 'translate(-50%, -50%)';
  }

  private createGesture(): Gesture {
    let headerHeight = 0;

    return this.gestureCtrl.create({
      el: this.el,
      threshold: 0,
      gestureName: 'drag',
      onStart: () => {
        this.el.style.zIndex = this.host.getLatestZIndex();
        headerHeight = document.querySelector('bbg-header').clientHeight;
        this.el.style.transform = 'scale(1.2) translate(-40%, -40%)';
      },
      onMove: (ev) => {
        if (this.host.isInside(ev, this.host.boundries)) {
          this.el.style.left = '' + ev.currentX;
          this.el.style.top = '' + (ev.currentY - headerHeight);
          this.el.style.transform = 'scale(1.2) translate(-40%, -40%)';
        }
      },
      onEnd: (ev) => {
        this.host.checkDrop(ev, this);
        this.el.style.transform = 'translate(-50%, -50%)';
      },
    });
  }
}
