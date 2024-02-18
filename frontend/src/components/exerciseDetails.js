import { useExercisesContext } from "../Hooks/useExercisesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ExerciseDetails = ({ exercise }) => {
  const { dispatch } = useExercisesContext();
  const handleClick = async () => {
    const response = await fetch(
      "https://mern-exercise-tracker-wxyg.onrender.com/api/exercises/" +
        exercise._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_EXERCISE", payload: json });
    }
  };
  return (
    <div className=" rounded relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)] mx-auto my-5 p-5 bg-white">
      <h4 className="text-[1.2em] text-mainc mt-0 mb-2.5 mx-0 font-semibold">
        {exercise.title}
      </h4>
      <p className=" m-0 text-[0.9em] text-[#555]">
        <strong>Weight (lbs): </strong>
        {exercise.weight}
      </p>
      <p className=" m-0 text-[0.9em] text-[#555]">
        <strong>Reps: </strong>
        {exercise.reps}
      </p>
      {/* <p className=" m-0 text-[0.9em] text-[#555]">{exercise.createdAt}</p> */}
      <p className=" text-[0.6em]">
        {formatDistanceToNow(new Date(exercise.createdAt), { addSuffix: true })}
      </p>
      <span
        className="absolute top-5 right-5 cursor-pointer bg-[#f1f1f1] p-[6px] rounded-[100%] text-[#333] hover:bg-mainc"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </span>
    </div>
  );
};

export default ExerciseDetails;
