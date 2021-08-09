/* eslint-disable */
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>

        <Header />
        <Main />
        <Footer />
      </>

    );
  }

}

export default App;