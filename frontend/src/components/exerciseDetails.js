const ExerciseDetails = ({ exercise }) => {
  return (
    <div
      className=" rounded relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)] mx-auto my-5 p-5;
    background: #fff "
    >
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
      <p className=" m-0 text-[0.9em] text-[#555]">{exercise.createdAt}</p>
    </div>
  );
};

export default ExerciseDetails;
