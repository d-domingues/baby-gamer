import { Component, Input } from '@angular/core';
import { DroppableDirective } from 'src/app/directives/droppable.directive';

import { DragDropHostDirective } from './../../directives/drag-drop-host.directive';

@Component({
  selector: 'bbg-drop-box',
  styles: [``],
  template: `
    <svg width="100%" viewBox="0 0 500 500">
      <path
        d="M74.1115 73.239C75.2154 70.6671 77.7452 69 80.544 69H250H419.456C422.255 69 424.785 70.6671 425.888 73.239L490.432 223.613L498.703 220.063L490.433 223.613C490.807 224.486 491 225.425 491 226.374V303C491 306.866 487.866 310 484 310H250H16C12.134 310 9 306.866 9 303V226.374C9 225.425 9.19308 224.486 9.5675 223.613L74.1115 73.239Z"
        fill="#BFB073"
        stroke="black"
        stroke-width="18"
      />
      <circle cx="384" cy="203" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.2 ? '' : 'none'" />
      <circle cx="155" cy="157" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.3 ? '' : 'none'" />
      <circle cx="267" cy="190" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.4 ? '' : 'none'" />
      <circle cx="112" cy="234" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.1 ? '' : 'none'" />
      <circle cx="334" cy="165" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.6 ? '' : 'none'" />
      <circle cx="250" cy="121" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.9 ? '' : 'none'" />
      <circle cx="288" cy="210" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.7 ? '' : 'none'" />
      <circle cx="336" cy="272" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.5 ? '' : 'none'" />
      <circle cx="156" cy="181" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0.8 ? '' : 'none'" />
      <circle cx="213" cy="286" r="67" stroke="black" stroke-width="4" [attr.fill]="fill" [attr.display]="count > 0 ? '' : 'none'" />
      <path
        d="M149.989 227.768C153.69 247.414 163.482 265.619 178.219 279.861C197.311 298.32 223.14 308.623 250 308.611C276.86 308.623 302.691 298.319 321.783 279.86C336.519 265.617 346.31 247.414 350.011 227.768L340.184 225.917L350.011 227.768C350.973 222.665 354.719 220 357.675 220H484C487.314 220 490 222.686 490 226V484C490 487.314 487.314 490 484 490H16C12.6863 490 10 487.314 10 484V226C10 222.686 12.6863 220 16 220H142.325C145.281 220 149.027 222.665 149.989 227.768Z"
        fill="#FFEB99"
        stroke="black"
        stroke-width="20"
      />
      <path
        d="M110 353H390C391.105 353 392 353.895 392 355V425C392 426.105 391.105 427 390 427H110C108.895 427 108 426.105 108 425V355C108 353.895 108.895 353 110 353Z"
        [attr.fill]="fill"
        stroke="black"
        stroke-width="16"
      />
    </svg>
  `,
})
export class DropBoxComponent {
  @Input() fill = 'white';
  @Input() totalBalls = 0;

  get count() {
    // return this.totalBalls < 11 || this.droppable.dropCount < 7 ? this.totalBalls / 10 : this.totalBalls;
    return this.droppable.dropCount / 10;
  }

  constructor(private dragDrop: DragDropHostDirective, private droppable: DroppableDirective) {}
}
