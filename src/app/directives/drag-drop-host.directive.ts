import { ChangeDetectorRef, ContentChildren, Directive, ElementRef, EventEmitter, Output, QueryList } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GestureDetail } from '@ionic/core';

import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';

@Directive({ selector: '[bbgDragDropHost]' })
export class DragDropHostDirective {
  private latestZIndex = 100;

  @Output() dropped = new EventEmitter();

  @ContentChildren(DraggableDirective) draggables: QueryList<DraggableDirective>;
  @ContentChildren(DroppableDirective) droppables: QueryList<DroppableDirective>;

  get boundries() {
    return this.elRef.nativeElement.getBoundingClientRect();
  }

  constructor(public elRef: ElementRef<HTMLDivElement>, private changeDetRef: ChangeDetectorRef, private plat: Platform) {
    this.plat.ready().then(() => {
      //  console.log(plat.width());
    });
  }

  ionViewDidEnter() {
    console.log(this.boundries);
  }

  isInside = ({ currentX, currentY }: GestureDetail, { left, right, top, bottom }: DOMRect): boolean =>
    currentX > left && currentX < right && currentY > top && currentY < bottom;

  getLatestZIndex = (): string => (++this.latestZIndex).toString();

  // make this reactive: emit when  box is used
  getUsedBox = (ev: GestureDetail) => this.droppables.find((d) => this.isInside(ev, d.getDomRect()));

  checkDrop(ev: GestureDetail, draggable: DraggableDirective) {
    const container = this.getUsedBox(ev);

    if (container) {
      if (container.filter && !container.filter(draggable, container)) {
        return;
      }

      container.dropCount++;
      this.dropped.emit({ draggable, container });
      this.changeDetRef.detectChanges();
    }
  }
}
