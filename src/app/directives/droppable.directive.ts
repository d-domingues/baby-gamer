import { Directive, ElementRef, Input, Optional } from '@angular/core';

import { DragDropHostDirective } from './drag-drop-host.directive';

@Directive({ selector: '[bbgDroppable]' })
export class DroppableDirective {
  @Input() bbgDroppable: any;
  @Input() position: any = {};
  @Input() dropCount = 0;
  @Input() filter: (...args: any) => boolean;

  el = this.elRef.nativeElement;

  constructor(public elRef: ElementRef<HTMLDivElement>, @Optional() private host?: DragDropHostDirective) {}

  ngOnInit() {
    this.el.style.position = 'absolute';
    this.el.style.top = this.position.top;
    this.el.style.left = this.position.left;
    this.el.style.bottom = this.position.bottom;
    this.el.style.right = this.position.right;
    this.el.style.transform = 'translateX(-50%)';
  }

  getStyle = (): CSSStyleDeclaration => this.elRef.nativeElement.style;

  getDomRect = (): DOMRect => this.elRef.nativeElement.getBoundingClientRect();
}
