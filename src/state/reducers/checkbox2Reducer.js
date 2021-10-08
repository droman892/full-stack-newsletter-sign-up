const checkbox2Reducer = (state = '', action) => {
    switch (action.type) {
        case 'check2':
            return action.payload;
        default:
            return state;
    }
};

export default checkbox2Reducer;