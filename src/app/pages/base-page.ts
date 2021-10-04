import { Directive, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { HeaderComponent } from './../components/header/header.component';

@Directive()
export class BasePage {
  private _content: IonContent;

  @ViewChild(HeaderComponent) protected header: HeaderComponent;

  @ViewChild(IonContent)
  protected set content(value: IonContent) {
    value.scrollY = value.scrollY ?? false;
    this._content = value;
  }

  protected get content(): IonContent {
    return this._content;
  }

  protected get alertCtrl() {
    return this.header.alertCtrl;
  }

  protected get player() {
    return this.header.player;
  }

  onClosePage = () => this.header.onClosePage();

  async onClosePageWithSuccessMsg(header = 'Parabéns') {
    const alert = await this.alertCtrl.create({ header, buttons: ['OK'] });
    alert.present();
    await alert.onDidDismiss();
    this.onClosePage();
  }
}
