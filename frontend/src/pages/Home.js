import { useEffect, useState } from "react";
import ExerciseDetails from "../components/exerciseDetails";

const Home = () => {
  const [exercises, setExercises] = useState(null);
  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("/api/exercises");
      const json = await response.json();
      if (response.ok) {
        setExercises(json);
      }
    };
    fetchExercises();
  }, []);

  return (
    <div className=" grid grid-cols-[3fr_1fr] gap-[100px]">
      <div className="workouts">
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
      </div>
    </div>
  );
};

export default Home;
