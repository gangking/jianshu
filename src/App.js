import React from 'react';
import Header from './common/header/index';
import { Globalstyle } from './style';
import { GlobalstyleIcon } from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './page/home';
import Detail from './page/detail';

class App extends React.Component {
  render () {
    return (
      <div>
        <Globalstyle></Globalstyle>
        <GlobalstyleIcon></GlobalstyleIcon>
        <Provider store={store}>
          <Header></Header>
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Router>
        </Provider>
      </div>
    );
  }

}

export default App;
