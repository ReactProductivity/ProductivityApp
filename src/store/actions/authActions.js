export const login = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((error) => {
            dispatch({type: 'LOGIN_FAILED', error})
        })
    }
}

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: "LOGOUT_SUCCESS"})
        })
    }
}

export const register = (fields) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            fields.email,
            fields.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: fields.firstname,
                lastname: fields.lastname,
                username: fields.username
            })
        }).then(() => {
            dispatch({type: 'USER_CREATED'})
        }).catch(error => {
            dispatch({type: 'USER_CREATION_FAILED', error})
        })
    }
}

const isLoggedIn = (uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // here is the async call to firebase
        const firebase = getFirebase();
        firebase.auth().add({
           name: friend
        }).then(() => {
            dispatch({type: 'ADD_FRIEND', friend});
        }).catch((error) => {
            dispatch({type: 'ADD_FRIEND_ERROR', error});
        })
    }
}

