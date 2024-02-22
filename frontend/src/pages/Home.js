import { useEffect } from "react";
import ExerciseDetails from "../components/exerciseDetails";
import ExerciseForm from "../components/ExerciseForm";
import { useExercisesContext } from "../Hooks/useExercisesContext";
import { useAuthContext } from "../Hooks/useAuthContext";

//auth
// "https://mern-exercise-tracker-wxyg.onrender.com/api/exercises"
const Home = () => {
  const { exercises, dispatch } = useExercisesContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch(
        "https://mern-exercise-tracker-wxyg.onrender.com/api/exercises",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_EXERCISES", payload: json });
      }
    };
    if (user) {
      fetchExercises();
    }
  }, [dispatch, user]);

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
