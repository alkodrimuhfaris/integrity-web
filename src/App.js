import React from 'react';
import {Provider} from 'react-redux';
import Main from './Components/Main';
import store from './redux/store';
import './Style.scss';
import Header from './Header/Header';
import Navbar from './Components/Layout/Navbar/Navbar';
import Footer from './Components/Layout/Footer.js/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
