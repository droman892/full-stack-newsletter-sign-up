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