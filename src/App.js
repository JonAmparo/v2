import React, { Fragment } from 'react';
import { Nav, Footer, Project } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
        <Project />

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
