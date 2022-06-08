import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloComponent from '../src/components/HelloComponent';

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFull Component</p>;
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById("root"));
// ReactDOM.render(<HelloComponent />, document.getElementById("root"));
