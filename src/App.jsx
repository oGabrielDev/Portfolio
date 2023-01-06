import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contato from './pages/Contato';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contato" component={Contato} />
    </Switch>
  );
}

export default App;
