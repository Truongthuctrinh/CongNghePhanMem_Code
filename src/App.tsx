import React, { useState, useEffect } from 'react';
import Demo1403 from './components/demo1403';
import Demo2103 from './components/demo2103';
import Demo1104 from './components/demo1104';
import Login from './components/demo2803';
import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/dashboard';

function App() {

  return (

    <div>
      {localStorage.getItem('userName') == 'admin' ? <Dashboard />
        : <Login />
      }
      {/* <Demo2103></Demo2103>
      <Demo2103></Demo2103> */}
      {/* <Login></Login> */}
    </div >
  );
}

export default App;