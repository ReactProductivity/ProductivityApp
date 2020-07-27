import authReducer from './authReducer'
import friendReducer from './friendReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    friends: friendReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer