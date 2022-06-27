import { combineReducers, createStore } from "redux";
import {messagesReduser} from "./redusers/messagesReduser/messagesReduser";
import {chatsReduser} from "./redusers/chatsReduser/chatsReduser";

const reduser = combineReducers({
    messages: messagesReduser,
    chats: chatsReduser
})

export const store = createStore(reduser);
