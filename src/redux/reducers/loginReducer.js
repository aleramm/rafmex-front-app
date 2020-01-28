import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOGOUT } from '../types';

const initialState = {
    login_info : {},
    validAccess : false,
    errorAccess : false
}

export default function( state, action){
    if(typeof state === 'undefined'){
        return initialState;
    }

    switch(action.type){
        case LOGIN_INIT:
            return {
                ...state,
                validAccess : false,
                errorAccess : false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                login_info : action.payload,
                validAccess : true,
                errorAccess : false,
            }
        case LOGIN_ERROR:
        case LOGIN_LOGOUT:
            return {
                ...state,
                login_info : {},
                validAccess : false ,
                errorAccess : true
            }
        default:
            return state;
    }
}
