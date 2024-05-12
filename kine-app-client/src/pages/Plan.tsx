import PlanData from '../mocks/Plan.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../variables.css';
import './Plan.css';
import Loader from '../components/loader/Loader';
import PlanStartImage from '../assets/planStartImage.jpg';
import { BsArrowLeftShort } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';

const Plan = () => {
  const [planData, setPlanData] = useState(PlanData);
  const [loading, setLoading] = useState(true);

  const { planId } = useParams();
  console.log(planId);

  useEffect(() => {
    setPlanData(PlanData);

    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="planContainer">
        <h2>Mi Plan</h2>
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
      <img
        className="planBgImage"
        src={PlanStartImage}
        alt="background image"
      />
      <div className="planContainer">
        <span>
          <BsArrowLeftShort />
        </span>
        <div>
          <h2>Mi Plan de {planData.name}</h2>
          <span className="planDay">{planData.day}</span>
          <span className="planTime">
            <MdOutlineWatchLater />
            {planData.time}'
          </span>
        </div>
        <div className="exercises">
          {planData.exercises.map((exercise) => {
            return (
              <div className="individualExercise" key={exercise.id}>
                <div className="individualExerciseFirstColumn">
                  <p></p>
                  <span></span>
                </div>
                <div className="individualExerciseSecondColumn">
                  <img src={exercise.image} alt="exercise photo" />
                  <span className="exerciseName">{exercise.name}</span>
                </div>
              </div>
            );
          })}
          <span>Descripcion y aclaraciones del plan</span>
        </div>
      </div>
    </>
  );
};

export default Plan;
