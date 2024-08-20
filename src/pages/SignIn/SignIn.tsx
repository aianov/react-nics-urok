import { observer } from 'mobx-react-lite'
import { EmailIcon } from '../../assets/icons/SignIn/EmailIcon'
import { PasswordIcon } from '../../assets/icons/SignIn/PasswordIcon'
import { signStore } from '../../store/sign-store/sign-store'
import s from './index.module.scss'

export const SignIn = observer(() => {
	const { inputObj, inputObjErr, updateInpData, submitLogin } = signStore

	return (
		<div className={s.main}>
			<div className={s.container}>
				<div className={s.titlediv}>
					<span className={s.title}>Вход</span>
				</div>
				<div className={s.inps}>

					{/* ИНПУТ ДЛЯ ЛОГИНА/ПОЧТЫ */}
					<div className={s.inpdiv}>
						<input
							type="text"
							placeholder='Логин/Почта'
							value={inputObj.login}
							onChange={e => updateInpData('login', e.target.value)}
							maxLength={16}
						/>
						<EmailIcon size={15} />
					</div>
					{inputObjErr.loginErr != '' && <span className='err'>{inputObjErr.loginErr}</span>}

					{/* ИНПУТ ДЛЯ ПАРОЛЯ */}
					<div className={s.inpdiv}>
						<input
							type="text"
							placeholder='Пароль'
							value={inputObj.password}
							onChange={e => updateInpData('password', e.target.value)}
							maxLength={32}
						/>
						<PasswordIcon size={15} />
					</div>
					{inputObjErr.passwordErr != '' && <span className='err'>{inputObjErr.passwordErr}</span>}
				</div>

				<div className={s.bot}>
					<button
						onClick={submitLogin}
					>
						Войти
					</button>
				</div>

			</div>
		</div>
	)
})