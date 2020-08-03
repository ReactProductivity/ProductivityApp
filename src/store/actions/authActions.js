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
        const currUser = firebase.auth().currentUser.uid;
        var isOfflineForDatabase = {
            state: 'offline',
            last_changed: getFirebase().database.ServerValue.TIMESTAMP,
          };
        firebase.auth().signOut(
        ).then(() => {
            console.log("CHANGED STAUS", currUser)
            firebase.database().ref(`/status/${currUser}`).set(isOfflineForDatabase)
        }).then(() => {
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
            firestore.collection('users').doc(resp.user.uid).set({
                firstname: fields.firstname,
                lastname: fields.lastname,
                username: fields.username,
                uid: resp.user.uid,
            })
            // firebase.database().ref('status/' + resp.user.uid).set({
            //     firstname: fields.firstname,
            //     lastname: fields.lastname,
            //     username: fields.username,
            //     uid: resp.user.uid,
            //     state: 'online',
            //     last_changed: null
            // });
        }).then(() => {
            dispatch({type: 'USER_CREATED'})
        }).catch(error => {
            dispatch({type: 'USER_CREATION_FAILED', error})
        })
    }
}

export const isLoggedIn = (uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // here is the async call to firebase
        const firestore = getFirestore();
        const usersRef = firestore.collection('users').doc(uid);
        usersRef.get(            
        ).then((resp) => {
            if(resp.data().online){
                dispatch({type: 'online'})
            }
            else{
                dispatch({type: 'offline'})

            }
            // dispatch({type:resp.data().online})
        })
        
    }
}

