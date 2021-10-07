const lastNameReducer = (state = '', action) => {
    switch (action.type) {
        case 'lastName':
            return action.payload;
        default:
            return state;
    }
};

export default lastNameReducer;