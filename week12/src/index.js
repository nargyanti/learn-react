import React from 'react';
import ReactDOM from "react-dom";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/show/:id' element={<Show/>} />      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'));
serviceWorker.unregister();
