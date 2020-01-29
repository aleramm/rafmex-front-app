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
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';


const App: React.FC = () => (
  <IonApp>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Main />
        </Switch>
      </Provider>
    </Router>
  </IonApp>
);

export default App;
