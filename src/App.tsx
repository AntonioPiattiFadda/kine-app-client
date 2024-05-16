import './variables.css';
import './App.css';

import NotFound from './components/NotFound';
import Navbar from './components/client/navbar/Navbar';
// import StartOverlay from './components/client/startOverlay/StartOverlay';
import ClientPlans from './pages/client/ClientPlans';
// import { Graphics } from './pages/Graphics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/client/Home';
import Plan from './pages/client/Plan';
import Login from './pages/admin/Login';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        {/* <StartOverlay /> */}
        <Routes>
          <Route path="/home/:id" element={<Home />} />
          <Route path="/patient/:patientId" element={<ClientPlans />} />
          <Route path="/plan/:planId" element={<Plan />} />
          {/* <Route path="/graphics/:id" element={<Graphics />} /> */}

          <Route path="*" element={<NotFound />} />

          <Route path="/admin/login" element={<Login />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
