import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Instrutores from './pages/Instrutores';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/instrutores" component={Instrutores} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/sobre" component={Sobre} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));