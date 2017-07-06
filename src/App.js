import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">    
          <Header />
            <Route exact path="/" component={Complexes} />
            <Route path="/сomplex" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
