import React from 'react';
import Header from './common/header/index';
import { Globalstyle } from './style';
import { GlobalstyleIcon } from './statics/iconfont/iconfont.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div>
        <Globalstyle></Globalstyle>
        <GlobalstyleIcon></GlobalstyleIcon>
        <Provider store={store}>
          <Header></Header>
        </Provider>

      </div>
    );
  }

}

export default App;
