const checkbox5Reducer = (state = '', action) => {
    switch (action.type) {
        case 'check5':
            return action.payload;
        default:
            return state;
    }
};

export default checkbox5Reducer;