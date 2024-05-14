import PlanData from '../mocks/Plan.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../variables.css';
import './Plan.css';
import Loader from '../components/loader/Loader';
import { BsArrowLeftShort } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';

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
        src="https://es.la-croix.com/images/0000/que-es-la-noche-oscura.jpeg"
        alt="background image"
      />
      <div className="planContainer">
        <span className="arrowIcon">
          <BsArrowLeftShort />
        </span>
        <div className="planInfo">
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
                  <img
                    src="https://i.blogs.es/59ee02/img_0682/650_1200.jpg"
                    alt="exercise photo"
                  />
                  <span className="exerciseInfoButton">
                    <IoInformationCircleOutline />
                  </span>
                  <div>
                    <span className="exerciseName">{exercise.name}</span>
                    <span className="exerciseName">4x12</span>
                  </div>
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
