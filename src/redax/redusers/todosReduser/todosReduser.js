
import { GET_TODOS, LOADING_TODOS, ERROR_TODOS } from '../../actionTypes';
import { getTodos, errorTodos, loadingTodos } from '../../actions';

const initialState = {
    todos: [],
    loading: false,
    error: null
};

export const todosReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case LOADING_TODOS:
            return {
                ...state,
                loading: true
            }
        case ERROR_TODOS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }                
        default:
            return state;
    }
}

export const loadTodos = () => {
    return async dispatch => {
        dispatch(loadingTodos())
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            dispatch(getTodos(data))
        } catch(e) {
            dispatch(errorTodos(e))
        }

        
    }
};