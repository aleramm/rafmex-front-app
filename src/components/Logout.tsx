import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { logoutAccion } from '../redux/actions/loginActions';

const Logout = () => {
    const [terminado, setTerminado] = useState(false);
    const dispath = useDispatch();
    useEffect(() => {
        const logout = () => { dispath( logoutAccion() ) }
        logout();
        setTerminado(true);
    },[dispath])

    if(terminado){
        window.location.href = '/';
    }

    return ( 
        <div></div>
     );
}
 
export default Logout;