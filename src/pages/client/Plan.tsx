import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/client/loader/Loader';
import { BsArrowLeftShort } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Exercise from './Exercise';
import { ExerciseType, PlanType } from '../../types';
import './Plan.css';
import { Link } from 'react-router-dom';
import { getPlanExercises } from '../../services';

const Plan = () => {
  const [planData, setPlanData] = useState<PlanType>({
    id: '',
    name: '',
    day: '',
    image: '',
    duration: 0,
    exercises: [],
  });

  const [loading, setLoading] = useState(true);
  const [exercise, setExercise] = useState<ExerciseType>({
    id: '',
    name: '',
    image: '',
    description: '',
    video_link: '',
    series: 0,
    repetitions: 0,
    index: 0,
  });
  const [showExercise, setShowExercise] = useState(false);
  const { planId } = useParams();
  const uidPatSession = sessionStorage.getItem('uidPat');
  const uidProfSession = sessionStorage.getItem('uidProf');

  useEffect(() => {
    if (planId && uidPatSession && uidProfSession) {
      getPlanExercises(planId, uidPatSession, uidProfSession)
        .then((PlanData) => {
          setLoading(false);
          console.log('PlanData:', PlanData);
          if (!PlanData) return;
          setPlanData(PlanData);
        })
        .catch((error) => console.error('Error al obtener el plan:', error));
    }
  }, [planId, uidPatSession, uidProfSession]);

  const handleShowExercise = (exerciseInfo: ExerciseType) => {
    setExercise({ ...exerciseInfo });
    setShowExercise(true);
  };

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
      {/* <img
        className="planBgImage"
        src="https://es.la-croix.com/images/0000/que-es-la-noche-oscura.jpeg"
        alt="background image"
      /> */}
      {showExercise && (
        <Exercise
          totalExercises={planData.exercises.length}
          exercise={exercise}
          setShowExercise={setShowExercise}
        />
      )}
      <div className="planContainer">
        <Link to="/patient/1231" className="arrowIcon">
          <BsArrowLeftShort />
        </Link>
        <div className="planInfo">
          <span className="planDay">Día {planData.day}</span>
          <span className="planTimeDuration">
            <MdOutlineWatchLater />
            {planData.duration}'
          </span>
        </div>
        <div className="exercises">
          {planData.exercises.map((exercise, index) => {
            return (
              <div className="individualExercise" key={exercise.id}>
                <div className="individualExerciseFirstColumn">
                  <p></p>
                  <span></span>
                </div>
                <div className="individualExerciseSecondColumn">
                  <img src={exercise.image} alt="exercise photo" />
                  <button
                    className="exerciseInfoButton"
                    onClick={() => handleShowExercise({ ...exercise, index })}
                  >
                    {index + 1}/{planData.exercises.length}
                    <IoInformationCircleOutline />
                  </button>
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
