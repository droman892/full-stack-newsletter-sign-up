const radioReducer = (state = '', action) => {
    switch (action.type) {
        case 'radioSelected':
            return action.payload;
        default:
            return state;
    }
};

export default radioReducer;