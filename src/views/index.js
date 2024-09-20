import BottomNavigation from '../navigations/BottomNavigation'
import Login from './login'

export const views = [
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'Main',
        component: BottomNavigation
    },
]