
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Header } from './Header';
import { Homepage } from './Homepage';
import { Exhibitions } from './Exhibitions';
import { ExhibitionDetail } from './ExhibitionDetail';
import { Space } from './Space';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Courses } from './Courses';
import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/exhibitions" exact>
          <Exhibitions />
        </Route>
        <Route path="/space" exact>
          <Space />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/exhibitions/:idExhibition" exact>
          <ExhibitionDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));