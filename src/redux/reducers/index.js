import { combineReducers } from 'redux'
import userReducer from './userReducer'
export * from './userReducer'
import loaddingReducer from './LoaddingReducer'
export * from './LoaddingReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    loadding: loaddingReducer,
})