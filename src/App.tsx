import { observer } from 'mobx-react-lite'
import './App.scss'
import './assets/styles/reset.scss'
import { MainRoutes } from './layout/MainRoutes'

export const App = observer(() => {
  return (
    <MainRoutes />
  )
})