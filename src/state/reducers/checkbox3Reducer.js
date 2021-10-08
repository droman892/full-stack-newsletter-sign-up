const checkbox3Reducer = (state = '', action) => {
    switch (action.type) {
        case 'check3':
            return action.payload;
        default:
            return state;
    }
};

export default checkbox3Reducer;