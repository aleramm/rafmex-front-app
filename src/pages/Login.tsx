import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toast from '../components/Toast';

import { loginAction } from '../redux/actions/loginActions';
import { userLoadAction } from '../redux/actions/userActions';

const Login: React.FC = () => {
    const [credentials, SetCredentials] = useState({user: '', password: ''});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const SignIn = (data: any) => dispatch( loginAction(data) );
    const LoadUser = () => dispatch( userLoadAction() );


    const login = useSelector((state: any) => {
      return state.login;
    });

    useEffect(() => {
      console.log(login);
      // Code
    },[login]);

    if (login.validAccess === true) {
      console.log('Logeado');
      LoadUser();
      window.location.href = `/home`;
    }
    
    const LoginUser = (e: any) => {
      e.preventDefault();
      setLoading(true);

      if( credentials.user === '' && credentials.password === ''){
          setLoading(false);
          Toast.fire(
            {
                type: 'error',
                title: `Ingrese un usuario y/o contraseña`
            }
          )
          return;
      }

      SignIn(credentials)
      
      setTimeout(() => {
          setLoading(false);
      },1000);
    };

    const handleKeyPress = (e: any) => {
      if(e.key === 'Enter'){
        LoginUser(e);
      }
    }

    if (loading) {
      console.log('Cargando');
    }

    return (
          <div className="auth-wrapper">
            <div className="auth-header">
              <div className="auth-title">Proyecto Base</div>
              <div className="auth-subtitle">v0.0.3</div>
              <div className="auth-label">Login</div>
            </div>
            <div className="auth-body">
              <div className="auth-content">
                <div className="form-group">
                  <label>Correo</label>
                  <input 
                    className="form-control"
                    placeholder="Ingresa correo" 
                    type="email"
                    required={true}
                    onChange={e => SetCredentials({user: e.target.value, password: credentials.password})}
                    onKeyUp={handleKeyPress}
                  />
                  { credentials.user !== '' ? null : 
                  <div className="help-block form-text with-errors form-control-feedback">
                    Necesita ingresar un usuario o email
                  </div>
                  }
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input 
                    className="form-control" 
                    placeholder="Ingresa contraseña" 
                    type="password"
                    required={true}
                    onChange={e => SetCredentials({user: credentials.user, password: e.target.value})}
                    onKeyUp={handleKeyPress}
                  />
                  { credentials.password !== '' ? null : 
                  <div className="help-block form-text with-errors form-control-feedback">
                    Necesita ingresar su contraseña
                  </div>
                  }
                </div>
              </div>
              <div className="auth-footer sm-text-center">
                <button className="btn btn-primary sm-max" onClick={LoginUser}>Ingresar</button>
                <div className="pull-right auth-link sm-max sm-mgtop-20">
                  <label className="check-label"><input type="checkbox" /> Mantener sesión</label>
                  <div className="devider"></div>
                  <div className="link-reference">Olvide mi contraseña</div>
                </div>
              </div>
            </div>
          </div>
    );
  };

  export default Login;
  