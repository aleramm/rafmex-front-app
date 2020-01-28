import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Route, Switch, /* Redirect, useHistory*/ } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, /* useDispatch */ } from 'react-redux';

import SideBar from '../components/SideBar';
import ToolBar from '../components/ToolBar';

import NotFound from './404';
import Home from './Home';
import BreadCrumb from '../components/BreadCrumb';

import { INI_MENU } from "../utils/ini";
import { _MENU } from "../utils/types";
import Pos from './Pos';
import AddressBook from './AdressBook';
import Products from './Products';
import Archives from './Archives';
import Camps from './Camps';
import Activities from './Activities';
import Providers from './Providers';
import Promotions from './Promotions';
import Trainnings from './Trainnings';
import Programs from './Programs';

const Main: React.FC = () => {
  // const [perfil, setPerfil] = useState();
  //const dispatch = useDispatch();
  // const history = useHistory()
  const [menu, setMenu] = useState(INI_MENU);
  const [actions, setActions] = useState(INI_MENU);
  const [crumbs, setCrumbs] = useState(window.location.pathname.split('/'));

  const login = useSelector((state: any) => {
    return state.login; 
  });

  const user = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    let c = ['home'];
    window.location.pathname.split('/').map(el => {
      if (el.length > 0 && el !== 'home') {
        c.push(el);
      }
    });

    setCrumbs(c);
  },[window.location.pathname]);

  if (login.validAccess === false) {
    console.log('Invalid User');
    window.location.href = `/`;
  }


  useEffect(() => {
    let objMenu: _MENU = [
      {name: 'Dashboard', link:'/dashboard', icon: 'fa-windows', show: true},
      {name: 'Punto de Venta', link:'/pos', icon: 'fa-shopping-basket', show: true},
      {name: 'Directorio', link:'/directory', icon: 'fa-address-book', show: true},
      {name: 'Productos', link:'/products', icon: 'fa-product-hunt', show: true},
      {name: 'Archivos', link:'/archives', icon: 'fa-archive', show: true},
      {name: 'Artes Campaña', link:'/camps', icon: 'fa-file-image-o', show: true},
      {name: 'Actividades', link:'/activities', icon: 'fa-heartbeat', show: true},
      {name: 'Proveedores', link:'/providers', icon: 'fa-id-badge', show: true},
      {name: 'Promociones', link:'/promotions', icon: 'fa-ticket', show: true},
      {name: 'Capacitación', link:'/trainnings', icon: 'fa-graduation-cap', show: true},
      {name: 'Programa', link:'/programs', icon: 'fa-calendar-check-o', show: true}
    ];

    let objActions = [
      {name: 'Imprimir', link:'/print', icon: 'fa-print', show: true},
      {name: 'Compartir', link:'/share', icon: 'fa-share-alt', show: true},
    ];

    setMenu(objMenu);
    setActions(objActions);
  },[user]);

  return (
    <IonPage>
      <IonHeader>
        <ToolBar />
      </IonHeader>
      <IonContent>
        <Fragment>
          <div className="wrapper fixed-nav">
            <SideBar menu={menu} actions={actions} />
            <div className="main">
              <BreadCrumb crumbs={crumbs} />
              <Switch>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/dashboard" component={Home} exact={true} />
                <Route path="/pos" component={Pos} exact={true} />
                <Route path="/directory" component={AddressBook} exact={true} />
                <Route path="/products" component={Products} exact={true} />
                <Route path="/archives" component={Archives} exact={true} />
                <Route path="/camps" component={Camps} exact={true} />
                <Route path="/activities" component={Activities} exact={true} />
                <Route path="/providers" component={Providers} exact={true} />
                <Route path="/promotions" component={Promotions} exact={true} />
                <Route path="/trainnings" component={Trainnings} exact={true} />
                <Route path="/programs" component={Programs} exact={true} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </IonContent>
    </IonPage>
  );
};

export default Main;
