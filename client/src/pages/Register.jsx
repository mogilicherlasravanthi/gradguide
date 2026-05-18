import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/register", form);
    alert("Registered successfully");
    navigate("/"); // go to login
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>

        <form onSubmit={submit}>
          <input
            className="form-control"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="btn btn-primary auth-btn">
            Register
          </button>
        </form>

        <div className="switch-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Register;