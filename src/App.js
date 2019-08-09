import React from 'react';
import Header from './common/header/index';
import { Globalstyle } from './style';
import { GlobalstyleIcon } from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './page/home';
import Detail from './page/detail/loadable';
import Login from "./page/login";
import Write from './page/write';

class App extends React.Component {
  render () {
    return (
      <div>
        <Globalstyle></Globalstyle>
        <GlobalstyleIcon></GlobalstyleIcon>
        <Provider store={store}>
          <Router>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </Router>
        </Provider>
      </div>
    );
  }

}

export default App;
