import ClientPlanData from '../../mocks/ClientPlan.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ClientPlans.css';
import Loader from '../../components/client/loader/Loader';
import { MdOutlineWatchLater } from 'react-icons/md';
import { CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const ClientPlans = () => {
  const [clientPlanData, setClientPlanData] = useState(ClientPlanData);
  const [loading, setLoading] = useState(true);

  const { patientId } = useParams();
  console.log(patientId);

  useEffect(() => {
    setClientPlanData(ClientPlanData);
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
          {clientPlanData.plans.map((plan) => {
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
                <span className="planDay">{plan.day}</span>
                <span className="planName">{plan.name}</span>
                <div className="timeAndPlay">
                  <span className="planTime">
                    <MdOutlineWatchLater />
                    {plan.time}'
                  </span>
                  <Link to={`/plan/${plan.id}`}>
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
