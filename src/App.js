// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Missions from './pages/Missions';
import Meetings from './pages/Meetings';
import Leave from './pages/Leave';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Adiciona o header em todas as páginas */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/missions" component={Missions} />
          <Route path="/meetings" component={Meetings} />
          <Route path="/leave" component={Leave} />
          <Route path="/home" component={Home} />
        </Switch>
        <Footer /> {/* Adiciona o footer em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;




