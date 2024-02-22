import { useAuthContext } from "./useAuthContext";
import { useExercisesContext } from "./useExercisesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: exerciseDispatch } = useExercisesContext();
  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    exerciseDispatch({ type: "SET_EXERCISES", payload: null });
  };
  return { logout };
};
