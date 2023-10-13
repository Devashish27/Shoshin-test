import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceListing from './components/ServiceListing';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ServiceListing} />
        <Route path="/service/:id" component={ServiceDetail} />
      </Switch>
    </Router>
  );
}

export default App;
