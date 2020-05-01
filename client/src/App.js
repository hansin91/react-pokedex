import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomePage from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Container style={{ marginTop: '5rem'}}>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/pokemon/search" component={Search} />
          <Route exact path="/pokemon/:id" component={Detail}  />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
