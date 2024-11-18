import BottomNavigation from '../navigations/BottomNavigation'
import Login from './Login'
import Chat from './Chats/Chat'
// import Home from './BCNB/Home'

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
    // {
    //     name: 'HomeBCNB',
    //     component: Home
    // },
]