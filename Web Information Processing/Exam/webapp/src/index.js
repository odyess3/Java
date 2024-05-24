import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar, Footer} from './pages/layout.js'
import {Tenant} from './pages/tenant.js'
import {Landlord} from './pages/landlord.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CreateLL} from './pages/createLL.js'
import {UpdateLL} from './pages/updateLL.js'




function App()
{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landlord/>}/>
      <Route path="/createLL" element={<CreateLL/>}/>
      <Route path="/updateLL" element={<UpdateLL/>}/>
      <Route path="/tenant" element={<Tenant/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
    
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


