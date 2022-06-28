import {GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE} from '../../actionTypes';

const initialState = {
    messages: [
        {id: 1, chatId: 1, author: "Андрей", text: "Привет!"},
        {id: 2, chatId: 2, author: "Пётр", text: "Привет!"},
        {id: 3, chatId: 3, author: "Геннадий", text: "Привет!"},
    ]
}

export const messagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: state.messages
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }    
        default: 
            return state;
    };
}