import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userLoadAction } from '../redux/actions/userActions';

const Home: React.FC = () => {
  const [perfil, setPerfil] = useState();
  const dispatch = useDispatch();

  const login = useSelector((state: any) => {
    return state.login; 
  });

  const user = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    console.log(login.login_info)
    console.log(user)
  },[login]);

  return (
    <div className="content">
        <div className="panel">
            <div className="content-header no-mg-top">
                <i className="fa fa-newspaper-o"></i>
                <div className="content-header-title">Dashboard</div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="content-box">
                      Dashboard
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Home;
