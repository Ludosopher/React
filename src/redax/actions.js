
// import {GET_TODOS, ERROR_TODOS, LOADING_TODOS } from './actionTypes';
import * as types from './actionTypes';

export const getTodos = (data) => ({
    type: types.GET_TODOS,
    payload: data
})

export const loadingTodos = () => ({
    type: types.LOADING_TODOS
})

export const errorTodos = (e) => ({
    type: types.ERROR_TODOS,
    payload: e.toString()
})

export const registerStart = () => ({
    type: types.REGISTER_START
})

export const registerSaccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err.toString()
})