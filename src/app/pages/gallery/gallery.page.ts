import { Component } from '@angular/core';
import { FigureService } from 'src/app/services/figure.service';
import { Figure } from 'src/models/figure';

@Component({
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  /*  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query(':self, app-gallery-pic', [
          style({ opacity: 0 }),
          stagger(100, [animate('300ms ease-out', style({ opacity: 1 }))]),
        ]),
      ]),
    ]),
  ], */
})
export class GalleryPage {
  // @HostBinding('@pageAnimations')
  public animatePage = true;

  figures: Figure[] = this.figService.figures;

  constructor(private figService: FigureService) {
    this.figures = this.figService.figures;
  }

  onClick() {
    const el = document.getElementById('demo');
    console.log(el);
  }
}
