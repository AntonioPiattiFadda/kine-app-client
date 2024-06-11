import { useState } from 'react';
import './CreatePlan.css';
import { BsArrowLeftShort } from 'react-icons/bs';

const CreatePlan = () => {
  const [newPlan, setNewPlan] = useState({
    patientName: '',
    pathology: '',
    duration: '',
    planName: '',
  });
  const [newPlanExercises, setNewPlanExercises] = useState([
    {
      exercise: '',
      series: '',
      repetitions: '',
      videoLink: '',
      image: '',
      day: '',
    },
  ]);
  const [planStep, setPlanStep] = useState(1);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setNewPlan({
      ...newPlan,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStape = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPlanStep(planStep + 1);
  };

  const handleGoBack = () => {
    setPlanStep(planStep - 1);
  };

  const handleAddExersice = () => {
    setNewPlanExercises([
      ...newPlanExercises,
      {
        exercise: '',
        series: '',
        repetitions: '',
        videoLink: '',
        image: '',
        day: '',
      },
    ]);
  };

  if (planStep === 1) {
    return (
      <div className="createPlanContainer">
        <h2>Crear Plan</h2>
        <form className="form">
          <label>Nombre del paciente</label>
          <input
            placeholder="Julian ..."
            name="patientName"
            value={newPlan.patientName}
            onChange={handleChange}
            type="text"
          />
          <label>Patología u objetivo</label>
          <input
            placeholder="Tendinopatia rotuliana..."
            name="pathology"
            value={newPlan.pathology}
            onChange={handleChange}
            type="text"
          />

          <button className="nextButton" onClick={handleNextStape}>
            Siguiente {planStep}/3
          </button>
        </form>
      </div>
    );
  }

  if (planStep === 2) {
    return (
      <div className="createPlanContainer">
        <h2>
          <span className="arrowBackIcon">
            <BsArrowLeftShort onClick={handleGoBack} />
          </span>
          Create Plan
        </h2>
        <form className="form">
          <label>Nombre del plan</label>
          <input
            placeholder="Entrenamiento de la fuerza..."
            name="planName"
            value={newPlan.planName}
            onChange={handleChange}
            type="text"
          />

          <label>Duración</label>
          <input
            placeholder="Duración en minutos..."
            name="duration"
            value={newPlan.duration}
            onChange={handleChange}
            type="text"
          />

          <button className="nextButton" onClick={handleNextStape}>
            Siguiente {planStep}/3
          </button>
        </form>
      </div>
    );
  }

  if (planStep === 3) {
    return (
      <div className="createPlanContainer">
        <h2>
          <span className="arrowBackIcon">
            <BsArrowLeftShort onClick={handleGoBack} />
          </span>
          Create Plan
        </h2>
        <div className="formAndDataTableContainer">
          <form className="form">
            {newPlanExercises.map((option, index) => {
              console.log(option);

              return (
                <div key={index}>
                  <label>Ejercicio</label>
                  <input
                    name="exercise"
                    value={newPlanExercises[index].exercise}
                    onChange={handleChange}
                    type="text"
                  />
                  <label>Series</label>
                  <input
                    name="series"
                    value={newPlanExercises[index].series}
                    onChange={handleChange}
                    type="text"
                  />
                  <label>Repeticiones</label>
                  <input
                    name="repetitions"
                    value={newPlanExercises[index].repetitions}
                    onChange={handleChange}
                    type="text"
                  />
                  <label>Link del video</label>
                  <input
                    name="videoLink"
                    value={newPlanExercises[index].videoLink}
                    onChange={handleChange}
                    type="text"
                  />
                  <label>Imagen</label>
                  <input
                    name="image"
                    value={newPlanExercises[index].image}
                    onChange={handleChange}
                    type="text"
                  />
                  <label>Día</label>
                  <input
                    name="day"
                    value={newPlanExercises[index].day}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              );
            })}
            <button className="nextButton" onClick={handleAddExersice}>
              Agregar ejercicio
            </button>

            <button className="createPlanButton" onClick={handleNextStape}>
              Crear Plan
            </button>
          </form>
          <div>Cuadro de ejercicios</div>
        </div>
      </div>
    );
  }
  //   return (
  //     <div className="createPlanContainer">
  //       <h2>Create Plan</h2>
  //       <form className="form">
  //         <label>Name</label>
  //         <input type="text" />
  //         <label>Description</label>
  //         <input type="text" />
  //         <label>Duration</label>
  //         {/* <input type="text" />
  //         <label>Price</label> */}
  //         <input type="text" />
  //         <button>Create</button>
  //       </form>
  //     </div>
  //   );
};

export default CreatePlan;
