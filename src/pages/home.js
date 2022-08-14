import React, { Component } from 'react';
import Header from './../components/header';
import Cards from './../components/cards';
import Footer from './../components/footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Cards />
        <Footer />
      </>
    );
  }
}

export default App;