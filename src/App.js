import React, { Fragment } from 'react';
import { Nav, Footer, Project, Home } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/projects' component={Project} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
