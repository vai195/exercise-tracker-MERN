import { useState } from "react";
import { useExercisesContext } from "../Hooks/useExercisesContext";

const ExerciseForm = () => {
  const { dispatch } = useExercisesContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exercise = { title, weight, reps };

    const response = await fetch(
      "https://mern-exercise-tracker-wxyg.onrender.com/api/exercises",
      {
        method: "POST",
        body: JSON.stringify(exercise),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setReps("");
      setWeight("");
      setError(null);
      setEmptyFields([]);
      console.log("new exercise added!");
      dispatch({ type: "CREATE_EXERCISE", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3 className="font-extrabold">Add a New Workout</h3>

      <label className=" block">Exercise Title:</label>
      <input
        className={emptyFields.includes("title") ? "error" : ""}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label className=" block">Weight (in lbs):</label>
      <input
        className={emptyFields.includes("weight") ? "error" : ""}
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
      />

      <label className=" block">Reps:</label>
      <input
        className={emptyFields.includes("reps") ? "error" : ""}
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button className=" bg-mainc border-[0] text-white p-[10px] rounded cursor-pointer font-poppins1 hover:border-mainc hover:bg-white hover:text-black hover:border-[2px] hover:rounded-2xl transition-all ">
        Add Exercise
      </button>
      {error && (
        <div className="p-[10px] bg-[#ffefef] border-solid border border-errorc text-errorc rounded my-5 m-0">
          {error}
        </div>
      )}
    </form>
  );
};

export default ExerciseForm;
