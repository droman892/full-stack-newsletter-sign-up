const radioReducer = (state = '', action) => {
    switch (action.type) {
        case 'radio1Selected':
            return action.payload;
        case 'radio2Selected':
            return action.payload;
        case 'radio3Selected':
            return action.payload;
        case 'radio4Selected':
            return action.payload;
        default:
            return state;
    }
};

export default radioReducer;