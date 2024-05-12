import './App.css';
import NotFound from './components/NotFound';
import Navbar from './components/navbar/Navbar';
import StartOverlay from './components/startOverlay/StartOverlay';
import ClientPlan from './pages/ClientPlans';
import { Graphics } from './pages/Graphics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <>
      <BrowserRouter>
        <StartOverlay />
        <Routes>
          <Route path="/home/:id" element={<Home />} />
          <Route path="/patient/:patientId" element={<ClientPlan />} />
          <Route path="/plan/:planId" element={<Plan />} />
          <Route path="/graphics/:id" element={<Graphics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
