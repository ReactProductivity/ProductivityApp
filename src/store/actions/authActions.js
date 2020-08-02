export const login = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((resp) => {
            var userStatusDatabaseRef = firebase.database().ref('status/' + resp.user.uid);
            var isOfflineForDatabase = {
                state: 'offline',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };
            
            var isOnlineForDatabase = {
                state: 'online',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };
            firebase.database().ref('.info/connected').on('value', function(snapshot) {
                // If we're not currently connected, don't do anything.
                if (snapshot.val() == false) {
                    return;
                };
        
                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
                    userStatusDatabaseRef.set(isOnlineForDatabase);
                });
            });
        }).then(() => {
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
            firestore.collection('users').doc(resp.user.uid).set({
                firstname: fields.firstname,
                lastname: fields.lastname,
                username: fields.username,
                uid: resp.user.uid
            })
            firebase.database().ref('status/' + resp.user.uid).set({
                firstname: fields.firstname,
                lastname: fields.lastname,
                username: fields.username,
                uid: resp.user.uid
            });
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
        const firebase = getFirebase();
        var userStatusDatabaseRef = firebase.database().ref('status/' + uid).state;
        if (userStatusDatabaseRef == "online"){
            dispatch({type: "online"})
        }
        else if(userStatusDatabaseRef == "offline"){
            dispatch({type: "offline"})
        }
        
    }
}

