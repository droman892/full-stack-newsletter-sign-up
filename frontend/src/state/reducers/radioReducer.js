const radioReducer = (state = '', action) => {
    switch (action.type) {
        case 'radio1Selected':
        case 'radio2Selected':
        case 'radio3Selected':
        case 'radio4Selected':
            return action.payload;
        default:
            return state;
    }
};

export default radioReducer;