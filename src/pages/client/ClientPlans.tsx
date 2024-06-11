import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ClientPlans.css';
import Loader from '../../components/client/loader/Loader';
import { MdOutlineWatchLater } from 'react-icons/md';
import { CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { getPatientPlans } from '../../services';
import { PlanType } from '../../types';

const ClientPlans = () => {
  const [clientPlanData, setClientPlanData] = useState<PlanType[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uidPat = searchParams.get('uidpat');
  const uidProf = searchParams.get('uidprof');
  if (uidPat) {
    sessionStorage.setItem('uidPat', uidPat);
  }
  if (uidProf) {
    sessionStorage.setItem('uidProf', uidProf);
  }
  //NOTE - Link  para enviar: http://localhost:5173/cli/patient?uidpat=yBoieYZYmx00aWVaJAHn&&uidprof=auc92632FbRbnVRF85bRW77i7a83

  useEffect(() => {
    const uidPatSession = sessionStorage.getItem('uidPat');
    const uidProfSession = sessionStorage.getItem('uidProf');

    if (uidPatSession && uidProfSession) {
      getPatientPlans(uidPatSession, uidProfSession)
        .then((plans) => {
          setClientPlanData(plans);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener los planes:', error);
        });
    }
  }, [uidPat, uidProf]);

  if (loading) {
    return (
      <div className="clientPlanContainer">
        <h2>Mis Planes</h2>
        <div
          style={{
            marginTop: '-150px',
          }}
        >
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="clientPlanContainer">
        <h2>Mis Planes</h2>
        <div className="plans">
          {clientPlanData.map((plan) => {
            return (
              <div
                className="individualPlan"
                style={{
                  backgroundImage: `url(${plan.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                key={plan.id}
              >
                <span className="planDay">Día {plan.day}</span>
                <span className="planName">{plan.name}</span>
                <div className="timeAndPlay">
                  <span className="planTime">
                    <MdOutlineWatchLater />
                    {plan.duration}'
                  </span>
                  <Link to={`/cli/plan/${plan.id}`}>
                    Ver
                    <CiPlay1 />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientPlans;
