import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOGOUT } from '../types';
import { deleteStorage } from '../../localStorage';
import Toast from '../../components/ToastAlert';
// import axios from '../../config/axios';

/*
const options = {
    headers: {'Content-Type': 'application/json'}
};
*/

const dummy_access = {
    status: 1,
    rol: 'Admin',
    token: 'w7x7h8zp3zbmtv2rvx7huim551p8zgjo',
    branch: 'Test'
}

export const loginInit = () => {
    return { type : LOGIN_INIT };
};
export const loginSuccess = (login) => {
    return { type: LOGIN_SUCCESS, payload : login };
};
export const loginError = (error) => {
    console.log(error);
    return { type : LOGIN_ERROR, payload: error };
};
export const loginLogout = () => {
    return { type : LOGIN_LOGOUT, payload :{ }};
};

export const logoutAccion = () => {
    return dispatch => {
        dispatch( loginLogout() );
        deleteStorage();
    };
};

export const loginAccederAction = (objectLogin) => {
    return dispatch => {
        dispatch( loginInit());

        dispatch(loginSuccess(dummy_access));
        Toast.fire(
            {
                type: 'success',
                title: 'Test Login'
            }
        )


        /*
        axios.post('/login', objectLogin, options).then(result => {
            const access = {...result.data.dsal[0], sucursal : objectLogin.sucursal};
            dispatch( loginSuccess(access));
        }).catch(error => {
            if(error.response.status === 401){
                Toast.fire({
                    type: "error",
                    title: "Usuario y/o Contraseña Invalidos"
                });
            }
            dispatch( loginError(error));
        });
        */

    };
};
