
import {GET_TODOS, ERROR_TODOS, LOADING_TODOS } from './actionTypes';

export const getTodos = (data) => ({
    type: GET_TODOS,
    payload: data
})

export const loadingTodos = () => ({
    type: LOADING_TODOS
})

export const errorTodos = (e) => ({
    type: ERROR_TODOS,
    payload: e.toString()
})