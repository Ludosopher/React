import {GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER} from '../actionTypes';

const initialState = {
    customers: [
        {
            id: 1,
            name: 'Andrey'
        },
        {
            id: 2,
            name: 'Sergey'
        },
        {
            id: 3,
            name: 'Elena'
        }
    ]
}

export const customersReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: state.customers
            }
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter((item) => item.id !== action.payload)
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }    
        default: 
            return state;
    };
}