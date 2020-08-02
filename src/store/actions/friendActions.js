const addFriend = (friend) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // here is the async call to firebase
        const firestore = getFirestore();
        firestore.collection('friends').add({
           name: friend
        }).then(() => {
            dispatch({type: 'ADD_FRIEND', friend});
        }).catch((error) => {
            dispatch({type: 'ADD_FRIEND_ERROR', error});
        })

    }
}

export default addFriend