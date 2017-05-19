import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import App from './components/app';


const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
    </div>
  </BrowserRouter>
)

export default Router
