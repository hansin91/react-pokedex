import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomePage from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route exact path="/pokemon/:id" component={Detail}  />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
