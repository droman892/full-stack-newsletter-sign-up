const emailReducer = (state = '', action) => {
    switch (action.type) {
        case 'email':
            return action.payload;
        default:
            return state;
    }
};

export default emailReducer;