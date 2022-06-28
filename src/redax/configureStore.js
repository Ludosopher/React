import { applyMiddleware, combineReducers, createStore } from "redux";
import {messagesReduser} from "./redusers/messagesReduser/messagesReduser";
import {chatsReduser} from "./redusers/chatsReduser/chatsReduser";

const logger = (store) => (next) => (action) => {
    console.log('dispathing', action);
    console.log('before', store.getState());

    let result = next(action);
    console.log('after', store.getState());

    return result;
}

const time = (store) => (next) => (action) => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action);
    }

    const timeOut = setTimeout(() => next(action), delay);

    return () => {
        console.log('deleting ...');
        clearTimeout(timeOut)
    }
}

const reduser = combineReducers({
    messages: messagesReduser,
    chats: chatsReduser
})

export const store = createStore(reduser, applyMiddleware(logger, time));
