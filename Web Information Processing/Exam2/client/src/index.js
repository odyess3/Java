import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar} from './pages/layout.js'
import {Tenant} from './pages/tenant.js'
import {Landlord} from './pages/landlord.js'
import {Contract} from './pages/contract.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landlord/>}/>
        <Route path="/landlord" element={<Landlord/>}/>
        <Route path="/tenant" element={<Tenant/>}/>
        <Route path="/contract" element={<Contract/>}/>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

