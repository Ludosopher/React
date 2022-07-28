import { applyMiddleware, combineReducers, createStore } from "redux";
import {messagesReduser} from "./redusers/messagesReduser/messagesReduser";
import {chatsReduser} from "./redusers/chatsReduser/chatsReduser";
import {todosReduser} from "./redusers/todosReduser/todosReduser";
import {userReduser} from "./redusers/userReduser/userReduser";
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const reduser = combineReducers({
    messages: messagesReduser,
    chats: chatsReduser,
    todos: todosReduser
})

export const store = createStore(reduser, userReduser, applyMiddleware(thunk, logger));
