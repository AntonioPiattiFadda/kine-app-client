import { Link } from 'react-router-dom';
import PlanStartImage from '../../../assets/planStartImage.jpg';
import './StartOverlay.css';

const StartOverlay = () => {
  // const handleOverlayClick = () => {
  //   const planOverlay = document.getElementById('planOverlay');
  //   planOverlay?.classList.toggle('planOverlayClosed');
  // };
  return (
    <div className="planOverlay" id="planOverlay">
      <img src={PlanStartImage} alt="asdfads" />
      <div>
        <p>Desbloquea tu potencial</p>
        <Link
          to={
            '/cli/patient?uidpat=yBoieYZYmx00aWVaJAHn&&uidprof=auc92632FbRbnVRF85bRW77i7a83'
          }
        >
          {' '}
          <button>{'Comienza tu Plan'}</button>
        </Link>
      </div>
    </div>
  );
};

export default StartOverlay;
