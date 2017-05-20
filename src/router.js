import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import App from './components/app';
import Actor from './components/displayActor';


const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/actor/:id" component={()=><Actor/>} />
    </div>
  </BrowserRouter>
)

export default Router
