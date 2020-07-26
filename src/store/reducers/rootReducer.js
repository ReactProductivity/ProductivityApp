import authReducer from './authReducer'
import friendReducer from './friendReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    friends: friendReducer,
    firestore: firestoreReducer
})

export default rootReducer