import PlanStartImage from '../../assets/planStartImage.jpg';
import './StartOverlay.css';

const StartOverlay = () => {
  const handleOverlayClick = () => {
    const planOverlay = document.getElementById('planOverlay');
    planOverlay?.classList.toggle('planOverlayClosed');
  };
  return (
    <div className="planOverlay" id="planOverlay">
      <img src={PlanStartImage} alt="asdfads" />
      <div>
        <p>Desbloquea tu potencial</p>
        <button onClick={handleOverlayClick}>{'Comienza tu Plan'}</button>
      </div>
    </div>
  );
};

export default StartOverlay;
