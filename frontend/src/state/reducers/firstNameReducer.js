const firstNameReducer = (state = '', action) => {
    switch (action.type) {
        case 'firstName':
            return action.payload;
        default:
            return state;
    }
};

export default firstNameReducer;