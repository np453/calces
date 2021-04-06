
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import ReactGA, { initialize } from 'react-ga';

//import scss
import './sass/main.scss'

import Home from './components/Home'
import Dash from './containers/Dash'
import Admin from './admin/Admin'


function App() {

//google analytics api
useEffect(() => {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}, [])

  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/d" component={Dash} />
            <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
