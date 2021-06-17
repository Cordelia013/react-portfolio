import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import project from './page/Project';
import Service from './page/Service';
import NotFound from './page/NotFound';

const App = () => {
  return (
    //  element parent
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Service} />
        <Route path="/projets" component={project} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;



