export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const inputFirstName = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'firstName',
            payload: text
        })
    }
}

export const inputLastName = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'lastName',
            payload: text
        })
    }
}

export const inputPhoneNum = (phoneNum) => {
    return (dispatch) => {
        dispatch({
            type: 'phoneNum',
            payload: phoneNum
        })
    }
}

export const inputEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: 'email',
            payload: email
        })
    }
}

export const markCheckboxes = (checks) => {
    return (dispatch) => {
        dispatch({
            type: 'checked',
            payload: checks
        })
    }
}

export const inputTextArea = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'textArea',
            payload: text
        })
    }
}

export const radioSelected = (radio) => {
    return (dispatch) => {
        dispatch({
            type: 'radioSelected',
            payload: radio
        })
    }
}