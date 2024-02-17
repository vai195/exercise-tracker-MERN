import { useEffect } from "react";
import ExerciseDetails from "../components/exerciseDetails";
import ExerciseForm from "../components/ExerciseForm";
import { useExercisesContext } from "../Hooks/useExercisesContext";

const Home = () => {
  const { exercises, dispatch } = useExercisesContext();
  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/api/exercises");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_EXERCISES", payload: json });
      }
    };
    fetchExercises();
  }, [dispatch]);

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[3fr_1fr] md:gap-[90px]">
      <div className="workouts">
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
      </div>
      <ExerciseForm />
    </div>
  );
};
// grid grid-cols-[3fr_1fr] gap-[100px]
export default Home;
