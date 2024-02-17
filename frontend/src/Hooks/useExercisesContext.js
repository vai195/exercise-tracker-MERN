import { ExerciseContext } from "../context/ExerciseContext";
import { useContext } from "react";

export const useExercisesContext = () => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw Error(
      "useExercisesContext must be used inside an ExercisesContextProvider"
    );
  }
  return context;
};
