import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactGa from 'react-ga';
import Main from './Components/Main';
import store from './redux/store';
import './Style.scss';

function App() {
  React.useState(() => {
    ReactGa.initialize(process.env.REACT_APP_G_ANALYTICS, {
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
  }, []);

  return (
    <Provider store={store}>
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
