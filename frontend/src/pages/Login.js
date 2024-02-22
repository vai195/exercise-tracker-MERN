import { useState } from "react";

import { useLogin } from "../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <form
      className=" max-w-[400px] my-10 mx-auto p-5 bg-white rounded"
      action=""
      onSubmit={handleSubmit}>
      <h3 className="text-[1.2em] font-extrabold">Log in</h3>
      <label>Email:</label>
      <input
        className="border-solid border-[2px]"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        className="border-solid border-[2px]"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        disabled={isLoading}
        className="p-2 text-white bg-mainc rounded hover:bg-white hover:border-mainc hover:border-solid hover:border-[2px] hover:text-mainc transition-all">
        Log in
      </button>
      {error && (
        <div className="p-[10px] bg-[#ffefef] border-solid border border-errorc text-errorc rounded my-5 m-0">
          {error}
        </div>
      )}
    </form>
  );
};

export default Login;
