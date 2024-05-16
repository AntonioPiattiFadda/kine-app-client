import ReactPlayer from 'react-player';
import { ExerciseType } from '../../types';
import './Exercise.css';
import { BsArrowLeftShort } from 'react-icons/bs';

interface ExerciseProps {
  exercise: ExerciseType;
  setShowExercise: React.Dispatch<React.SetStateAction<boolean>>;
  totalExercises: number;
}

const Exercise = ({
  exercise,
  setShowExercise,
  totalExercises,
}: ExerciseProps) => {
  const handleGoBack = () => {
    setShowExercise(false);
  };

  return (
    <div className="exerciseContainer">
      <span className="arrowBackIcon">
        <BsArrowLeftShort onClick={handleGoBack} />
      </span>

      <div className="titleContainer">
        <h2>Ejercicio</h2>
        <p>
          <span>{exercise.index + 1}</span>/{totalExercises}
        </p>
      </div>
      <div className="videoContainer">
        <ReactPlayer
          controls
          width={'80%'}
          height={250}
          url={exercise.videoLink}
        />
      </div>
      <div className="videoInfo">
        <p>{exercise.name}</p>
        <p>{exercise.description}</p>
        {/* <div class="timer-container">
          <div class="timer"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Exercise;
