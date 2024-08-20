import { makeAutoObservable } from 'mobx'

class CounterStore {
	constructor() { makeAutoObservable(this) }

	count = 0

	setCount = () => {
		this.count += 1
	}

}

export const counterStore = new CounterStore()