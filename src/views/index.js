import BottomNavigation from '../navigations/BottomNavigation'
import Login from './Login'
import Chat from './Chats/Chat'
import Timekeeping from './Timekeeping'

export const views = [
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'Main',
        component: BottomNavigation
    },
    {
        name: 'Message',
        component: Chat
    },
    {
        name: 'Timekeeping',
        component: Timekeeping
    },
]