import React from 'react';
import Nav from './Nav.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="splash">Hi, I&#39;m Ian</h1>
        <h2 className="sub-splash">I like to make cool stuff</h2>
        <Nav />
      </div>
    );
  }
}
