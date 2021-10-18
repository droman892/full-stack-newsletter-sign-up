const phoneReducer = (state = '', action) => {
    switch (action.type) {
        case 'phoneNum':
            return action.payload;
        default:
            return state;
    }
};

export default phoneReducer;