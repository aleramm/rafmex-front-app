import React, { Fragment } from 'react';
import { IonApp } from '@ionic/react';

/* Custom Project */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

/* Header */
import HeaderApp from './components/Header/Header';
import FooterApp from './components/Footer/Footer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Template Pongo CSS */
import './assets/plugins/bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/font-awesome/css/font-awesome.min.css'
import './assets/plugins/bootstrap-daterangepicker/daterangepicker.css'
import './assets/plugins/animate/animate.css'
import './assets/css/main.css'
import './assets/css/pdv.css'

/* Material Design */
import './assets/fonts/iconic/css/material-design-iconic-font.min.css';

/* Template Pongo JS */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Theme variables */
import './theme/variables.css';
import Main from './pages/Main';

//import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Distribuidores from './pages/Distribuidores';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';

/* Import Productos */


/* Import Local Styles */
import './assets/rafmexassets/App.css';
import './assets/rafmexassets/Main.css';
import './assets/rafmexassets/util.css';

import Bg01 from './assets/img/bg-01.jpg';

/* dotenv */
require('dotenv').config()

class App extends React.Component {
  render() {
    return (
      <IonApp style={{ overflowY: 'scroll' }}>
        <Router>
          <Fragment>
            <div style={{ paddingTop: '50px' }}>
              <HeaderApp />
                <Switch>
                  <Route exact path="/index" component={Main} />
                  <Route exact path="/nosotros" component={Nosotros}>
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                      <h2 className="ltext-105 cl0 txt-center">
                          Nosotros
                      </h2>
                    </section>
                    <Nosotros />
                  </ Route>
                  <Route exact path="/productos" component={Productos}>
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                      <h2 className="ltext-105 cl0 txt-center">
                          Productos
                      </h2>
                    </section>
                    <Productos />
                  </ Route>
                  <Route exact path="/distribuidores" component={Distribuidores}  >
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                      <h2 className="ltext-105 cl0 txt-center">
                        Distribuidores
                      </h2>
                    </section>
                    <Distribuidores />
                  </ Route>
                  <Route exact path="/novedades" component={Novedades}  >
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                      <h2 className="ltext-105 cl0 txt-center">
                        Novedades
                      </h2>
                    </section>
                    <Novedades />
                  </ Route>
                  <Route exact path="/contacto" component={Contacto}  >
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: `url(${Bg01})` }}>
                      <h2 className="ltext-105 cl0 txt-center">
                        Contacto
                      </h2>
                    </section>
                    <Contacto />
                  </ Route>
                </Switch>
                <FooterApp />
              </div>
          </Fragment>
        </Router>
      </IonApp>
    )
  }
};
export default App;
