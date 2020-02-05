import { USER_INIT, USER_SUCCESS, USER_ERROR } from '../types';

const initialState = {
    perfil : {},
    error : false,
    loading : false
};

export default function(state, action){
    if(typeof state === 'undefined'){
        return initialState;
    }

    switch(action.type){
        case USER_INIT:
            return {
                ...state,
                loading : true
            };
        case USER_SUCCESS:
            return {
                ...state,
                perfil : action.payload,
                error : false,
                loading : false 
            };
        case USER_ERROR:
            return {
                ...state,
                perfil : {},
                error : true,
                loading : false
            };
        default:
            return state;
    }
}