import { makeAutoObservable } from 'mobx'

class SignStore {
	constructor() { makeAutoObservable(this) }

	inputObj = {
		login: '',
		password: ''
	}

	inputObjErr = {
		loginErr: '',
		passwordErr: ''
	}

	updateInpData = (key: string, value: string) => {
		this.inputObj = {
			...this.inputObj,
			[key]: value
		}
		this.inputObjErr = {
			...this.inputObjErr,
			[key + 'Err']: ''
		}
	}

	validateData = () => {
		const inp = this.inputObj
		const err = this.inputObjErr

		if (inp.login == '') err.loginErr = 'Логин пуст'

		if (inp.password == '') err.passwordErr = 'Пароль пуст'
	}

	submitLogin = () => {
		this.validateData()
		if (this.inputObjErr.loginErr != '' || this.inputObjErr.passwordErr != '') return
		window.location.href = '/main'
	}

}

export const signStore = new SignStore()