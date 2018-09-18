import axios from "axios";

const initialState = {
    loading: false,
    phones: []
};

const ACTION_TYPES = {
    GET_PHONES_FULFILLED: 'GET_PHONES_FULFILLED',
    GET_PHONES_PENDING: 'GET_PHONES_PENDING',
    GET_PHONES_REJECTED: 'GET_PHONES_REJECTED',
    GET_PHONES: 'GET_PHONES'
};

export function clientFetchReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_PHONES_PENDING:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.GET_PHONES_FULFILLED:
            return {
                ...state,
                phones: action.payload,
                loading: false
            }
        case ACTION_TYPES.GET_PHONES_REJECTED:
            console.log(action.payload)
            return {
                ...state,
                loading: true,
            }

        default:
            return state;
    }
}

export function getPhones() {
    return {
        type: ACTION_TYPES.GET_PHONES,
        payload: axios.get('/api/phones')

            .then((response) => response.data)
            .catch(error => console.log('Error', error))
    }
}