const checkboxReducer = (state = '', action) => {
    switch (action.type) {
        case 'check1':
            return state + ' | ' + action.payload;
        case 'check2':
            return state + ' | ' + action.payload;
        case 'check3':
            return state + ' | ' + action.payload;
        case 'check4':
            return state + ' | ' + action.payload;
        case 'check5':
            return state + ' | ' + action.payload;
        default:
            return state;
    }
};

export default checkboxReducer;