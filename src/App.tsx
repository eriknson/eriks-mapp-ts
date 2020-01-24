import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Case from './components/case/Case';

import Items from './cases.json';

const App: React.FC = () => {
  let items = Items.items;
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-container'>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          {items.map((caseObject, i) => (
            <Route
              key={i}
              exact
              path={'/' + caseObject.url}
              render={props => <Case {...props} metadata={caseObject} />}
            />
          ))}
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
