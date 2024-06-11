import './Home.css';
import { useEffect, useState } from 'react';
import { getPatient, getUser } from '../../services';
import { ClientType, ProfessionalType } from '../../types';
import Loader from '../../components/client/loader/Loader';

const Home = () => {
  const [professional, setProfessional] = useState<ProfessionalType>({
    id: '',
    name: '',
    phone: '',
    email: '',
    image: '',
  });
  const [client, setClient] = useState<ClientType>({
    id: '',
    name: '',
    pathology: '',
  });
  const [loading, setLoading] = useState(true);

  const uidPat = sessionStorage.getItem('uidPat');
  const uidProf = sessionStorage.getItem('uidProf');

  useEffect(() => {
    if (uidPat && uidProf) {
      getUser(uidProf)
        .then((user) => {
          if (!user) {
            return;
          }
          setProfessional(user);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener el profesional:', error);
        });
      getPatient(uidPat, uidProf)
        .then((patient) => {
          if (!patient) {
            return;
          }
          setClient(patient);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener el paciente:', error);
        });
    }
  }, [uidPat, uidProf]);

  return (
    <div className="homeContainer">
      <h2> Inicio</h2>

      {loading ? (
        <Loader />
      ) : (
        <>
          <h3>Profesional</h3>
          <div className="professionalInfoContainer">
            <img
              className="professionalImage"
              src={professional.image}
              alt="professional logo"
            />
            <div>
              <span>{professional.name}</span>
              <span>{professional.phone}</span>
              {/* <span>{professional.email}</span> */}
            </div>
          </div>
          <h3>Paciente</h3>
          <div className="clientInfoContainer">
            <span>{client.name}</span>

            <span>{client.pathology}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
