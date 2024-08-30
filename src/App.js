import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'; 
import Sidebar from './components/Sidebar';

import Inventory from "./components/Inventory"
import Order from "./components/Order"
import Returns from "./components/Returns"
import Shipping from "./components/Shipping"
import Integrations from "./components/Integrations"
import Channel from "./components/Channel"
import Customers from './components/Customers';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Sidebar'>
          <Sidebar />
        </div>
        <div className="Content">
          <Routes>
            
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/inventory" element={<Inventory/>}/>
            <Route exact path="/order" element={<Order/>}/>
            <Route exact path="/returns" element={<Returns/>}/>
            <Route exact path="/shipping" element={<Shipping/>}/>
            <Route exact path="/integrations" element={<Integrations/>}/>
            <Route exact path="/channel" element={<Channel/>}/>
            <Route exact path="/customers" element={<Customers/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;