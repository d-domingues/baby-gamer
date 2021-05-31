import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { FigureModule } from '../components/figure/figure.module'
import { WhoIsPage } from './who-is.page'

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule.forChild([{ path: '', component: WhoIsPage }]),
		FigureModule
	],
	declarations: [WhoIsPage]
})
export class WhoIsModule {}
