import BottomNavigation from '../navigations/BottomNavigation'
import Login from './login'
import Message from './chats/Message'
import Chat from './chats/Chat'

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
]