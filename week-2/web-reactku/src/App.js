import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component from Class App</h1>
        <List />
        <Footer title='Footer Page' name='JTI' />
      </div>
    );
  }
}

export default App;