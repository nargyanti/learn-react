import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const HelloComponent = () => {
  return <p>Hello Component</p>
}

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFull Component</p>;
  }
}

ReactDOM.render(<StateFullComponent />, document.getElementById("root"));
