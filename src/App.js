import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
