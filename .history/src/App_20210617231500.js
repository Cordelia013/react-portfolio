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
        <Route path="/" component={Home} />
        <Route path="/services" component={Service} />
        <Route path="/projets" component={project} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={Home} />

    </BrowserRouter>
            </>
          );
        };

export default App;
/>
        </Route >
       </BrowserRouter >
    </>
  );
};

export default App;
