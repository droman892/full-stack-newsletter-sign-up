import checkbox1Reducer from "../reducers/checkbox1Reducer"

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

export const markCheckbox1 = (check) => {
    return (dispatch) => {
        dispatch({
            type: 'check1',
            payload: check
        })
    }
}

export const markCheckbox2 = (check) => {
    return (dispatch) => {
        dispatch({
            type: 'check2',
            payload: check
        })
    }
}

export const markCheckbox3 = (check) => {
    return (dispatch) => {
        dispatch({
            type: 'check3',
            payload: check
        })
    }
}

export const markCheckbox4 = (check) => {
    return (dispatch) => {
        dispatch({
            type: 'check4',
            payload: check
        })
    }
}

export const markCheckbox5 = (check) => {
    return (dispatch) => {
        dispatch({
            type: 'check5',
            payload: check
        })
    }
}

export const radio1Selected = (radio) => {
    return (dispatch) => {
        dispatch({
            type: 'radio1Selected',
            payload: '0% - 10%'
        })
    }
}

export const radio2Selected = (radio) => {
    return (dispatch) => {
        dispatch({
            type: 'radio2Selected',
            payload: '10% - 20%'
        })
    }
}

export const radio3Selected = (radio) => {
    return (dispatch) => {
        dispatch({
            type: 'radio3Selected',
            payload: '20% - 50%'
        })
    }
}

export const radio4Selected = (radio) => {
    return (dispatch) => {
        dispatch({
            type: 'radio4Selected',
            payload: '+50%'
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