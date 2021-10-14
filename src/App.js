import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './Components/Main';
import store from './redux/store';
import './Style.scss';
import Header from './Header/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect from="/*" to="/" exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
