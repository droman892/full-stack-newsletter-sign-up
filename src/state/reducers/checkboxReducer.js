const checkboxReducer = (state = '', action) => {
    switch (action.type) {
        case 'checked':
            return action.payload;
        default:
            return state;
    }
};

export default checkboxReducer;