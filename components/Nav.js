import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/work">Work</Link>
        <a className="nav-link" href="mailto:ian.j.mcke@gmail.com">Email Me</a>
        <a className="nav-link" href="https://github.com/IanMcKe">Github</a>
        <a className="nav-link" href="https://www.linkedin.com/in/ianmckenney">Linked In</a>
      </nav>
    );
  }
}
