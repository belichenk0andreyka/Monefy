const initialState = {
    notification: {
        info: '',
        isOpen: false,
    },
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_NOTIFICATION':
            return { ...state, notification: action.payload };
        case 'CLOSE_NOTIFICATION':
            return { ...state, notification: initialState.notification };
        default:
            return state
    }

}

export default uiReducer
