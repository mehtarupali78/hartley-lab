import React from 'react';
import './App.css';
import LoginPage from "./Containers/LoginPage";
import { history } from './utilities/history';
import  Routes from './Router/Routers';

function App() {
  return (
   
    <div className="App">
       <Routes history={history} />
  </div>
 
   
  );
}

export default App;
