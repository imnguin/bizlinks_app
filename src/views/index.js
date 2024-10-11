import BottomNavigation from '../navigations/BottomNavigation'
import Login from './Login'
import Message from './Chats/Message'
import Chat from './Chats/Chat'

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