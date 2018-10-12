import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contacts from './Pages/Contacts';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/contacts' component={Contacts} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));