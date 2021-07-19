import React, { useContext, useState } from "react";
// import useQoreAuthentication from "../hooks/useQoreAuthentication";

import GlobalContext from "../context/globalContext";
import { setLogin } from "../context/globalActions";
import useQoreAuthenticationHttps from "../hooks/useQoreAuthenticationHttps";

export default function AdminLoginForm({ setShowModal }) {
  // const { handleLogin, client } = useQoreAuthentication();
  const [, dispatch] = useContext(GlobalContext);
  const { handleLogin } = useQoreAuthenticationHttps(dispatch, setLogin);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    // FIXME:
    event.preventDefault();
    handleLogin(input);
    // handleLogin(email, password);

    setShowModal(false);

    // dispatch(setLogin(true));
    // localStorage.isLoggedIn = true;
  };

  return (
    <form className="w-75 mx-auto" onSubmit={handleSubmit}>
      <p className="w-75 mx-auto text-center display-6">Admin Login</p>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email" // FIXME:
          name="email"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password" // FIXME:
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
