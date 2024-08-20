import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/Main/Main'
import { SignIn } from '../pages/SignIn/SignIn'

export const MainRoutes = () => {
	return (
		<Routes>

			<Route path='/sign-in' element={<SignIn />} />

			<Route path='/main' element={<MainPage />}>
				<Route path='/main/priver1' element={<div><span>PRIVET 1</span></div>} />
				<Route path='/main/priver2' element={<div><span>PRIVET 2</span></div>} />
			</Route>

		</Routes>
	)
}