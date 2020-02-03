import React from 'react';
import { IonApp } from '@ionic/react';

/* Custom Project */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


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

/* Import Local Styles */
import './assets/rafmexassets/App.css';
import './assets/rafmexassets/Main.css';
import './assets/rafmexassets/util.css';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main}/>
          {/* <Route exact path="/inicio" component={Inicio}/> */}
          <Route exact path="/nosotros" component={Nosotros}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/distribuidores" component={Distribuidores}/>
          <Route exact path="/novedades" component={Novedades}/>
          <Route exact path="/contacto" component={Contacto}/>
          <Main />
        </Switch>
      </Provider>
    </Router>
  </IonApp>
)

export default App;
