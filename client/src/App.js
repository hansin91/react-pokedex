import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomePage from './pages/Home'

function App() {
  return (
    <Router>
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
