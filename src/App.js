import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Author from './Author'
import Body from './Body'
import Socials from './Socials'
import Sponsor from './Sponsor'
import Others from './Others'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            <Body />
            <Socials />
          </div>
          <Sponsor />
          <Others />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
