import { Injectable } from '@angular/core'

export interface AnimationItem {
	title: string
	fileName: string
}

@Injectable({ providedIn: 'root' })
export class AnimationCountService {
	private _items: AnimationItem[] = []

	get total() {
		return this._items.length
	}

	specifyAnimations(animations: AnimationItem[]) {
		this._items = Array.from(animations)
	}

	get items() {
		return this._items
	}
}
