import { auth } from '../../../firebase';
import { registerError, registerSaccess, registerStart } from '../../actions';
import * as types from '../../actionTypes';

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSaccess(user))
            })
            .catch((err) => dispatch(registerError(err)))
    }
}