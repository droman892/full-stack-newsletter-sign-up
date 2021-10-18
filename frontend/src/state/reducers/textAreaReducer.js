const textAreaReducer = (state = '', action) => {
    switch (action.type) {
        case 'textArea':
            return action.payload;
        default:
            return state;
    }
};

export default textAreaReducer;