import './variables.css';
import './App.css';

import NotFound from './components/NotFound';
import ClientNavbar from './components/client/navbar/Navbar';
import AdminNavbar from './components/admin/navbar/Navbar';
// import StartOverlay from './components/client/startOverlay/StartOverlay';
import ClientPlans from './pages/client/ClientPlans';
// import { Graphics } from './pages/Graphics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/client/Home';
import Plan from './pages/client/Plan';
import Login from './pages/admin/Login';
import './App.css';
import CreatePlan from './pages/admin/CreatePlan';
import Dashboard from './pages/admin/Dashboard';
import TestComponent from './pages/client/TestComponent';

function App() {
  return (
    <BrowserRouter>
      {/* <StartOverlay /> */}
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="/cli/home" element={<Home />} />
        <Route path="/cli/patient" element={<ClientPlans />} />
        <Route path="/cli/plan/:planId" element={<Plan />} />
        {/* <Route path="/graphics/:id" element={<Graphics />} /> */}

        <Route path="*" element={<NotFound />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/create-plan" element={<CreatePlan />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      <ClientNavbar />
      <AdminNavbar />
    </BrowserRouter>
  );
}

export default App;
