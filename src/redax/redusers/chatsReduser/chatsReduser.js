import {GET_CHATS, DELETE_CHAT, ADD_CHAT} from '../../actionTypes';

const initialState = {
    chats: [
        {id: 1, name: "Рабочий"},
        {id: 2, name: "Друзья"},
        {id: 3, name: "Семья"},
        {id: 4, name: "СМИ"},
    ]
}

export const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS:
            return {
                ...state,
                chats: state.chats
            }
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }    
        default: 
            return state;
    };
}