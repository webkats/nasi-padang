import React, { useState } from "react";
import useQoreAuthentication from "../hooks/useQoreAuthentication";

export default function AdminLoginForm({ setIsLoggedIn, setShowModal }) {
  const { handleLogin } = useQoreAuthentication();

  const [input, setInput] = useState({
    email: "",
    pasword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handleLogin(input.email, input.password);
    localStorage.isLoggedIn = true;
    setIsLoggedIn(true);
    setShowModal(false);
  };

  return (
    <form className="w-75 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
}
