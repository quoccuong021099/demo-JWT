import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <section className="login-container">
      <div className="login-title"> Log in</div>
      <form onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Continue </button>
      </form>
      <div className="login-register"> Don't have an account yet? </div>
      <Link className="login-register-link" to="/register">
        Register one for free{" "}
      </Link>
    </section>
  );
};

export default Login;
