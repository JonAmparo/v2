import React, { Fragment } from 'react';
import { Nav, Footer } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle, theme } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
