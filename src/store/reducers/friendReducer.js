const initialState = {
    
};

const friendReducer = (state = initialState, action) => {
    if (action.type === 'ADD_FRIEND'){
        console.log('add friend', action.friend)
    }
    if (action.type === 'ADD_FRIEND_ERROR'){
        console.log('add friend error', action.error);
        
    }
    return state;
}

export default friendReducer