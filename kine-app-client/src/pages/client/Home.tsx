import './Home.css';
import ProfessionalData from '../../mocks/Professional.json';
import ClientData from '../../mocks/ClientPlan.json';
import { useEffect, useState } from 'react';

const Home = () => {
  const [professional, setProfessional] = useState(ProfessionalData);

  useEffect(() => {
    setProfessional(ProfessionalData);
  }, []);

  return (
    <div className="homeContainer">
      <h2> Inicio</h2>
      <h3>Profesional</h3>
      <div className="professionalInfoContainer">
        <img
          className="professionalImage"
          src={professional.image}
          alt="professiona logo"
        />
        <div>
          <span>{professional.name}</span>
          <span>{professional.phone}</span>
          {/* <span>{professional.email}</span> */}
        </div>
      </div>
      <h3>Paciente</h3>
      <div className="clientInfoContainer">
        <span>{ClientData.name}</span>

        <span>{ClientData.patology}</span>
      </div>
    </div>
  );
};

export default Home;
