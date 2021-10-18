const checkbox1Reducer = (state = '', action) => {
    switch (action.type) {
        case 'check1':
            return action.payload;
        default:
            return state;
    }
};

export default checkbox1Reducer;