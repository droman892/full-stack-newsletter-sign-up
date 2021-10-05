const firstNameReducer = (state = '', action) => {
    switch (action.type) {
        case 'firstNameInput':
            return state + 9;
        case 'lastNameInput':
            return state + 8;
        default:
            return state;
    }
};

export default firstNameReducer;