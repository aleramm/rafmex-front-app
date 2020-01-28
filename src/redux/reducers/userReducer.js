import { USER_INIT, USER_SUCCESS, USER_ERROR } from '../types';

const initialState = {
    configurationUser : {},
    errorUser : false,
    loading : true
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
                configurationUser : action.payload.configuration,
                errorUser : false,
                loading : false 
            };
        case USER_ERROR:
            return {
                ...state,
                configurationUser : {},
                errorUser : true,
                loading : false
            };
        default:
            return state;
    }
}