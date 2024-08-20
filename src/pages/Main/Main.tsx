import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import s from './index.module.scss'

export const MainPage = observer(() => {
	return (
		<div className={s.main}>
			<div className={s.videos}>

			</div>

			<Outlet />

		</div>
	)
})