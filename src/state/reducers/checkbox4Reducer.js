const checkbox4Reducer = (state = '', action) => {
    switch (action.type) {
        case 'check4':
            return action.payload;
        default:
            return state;
    }
};

export default checkbox4Reducer;