import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  // For navigation
  let navigate = useNavigate();

  // To access parameters of the current route (in this case, id)
  let {id} = useParams();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const { name, userName, email } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://16.170.196.198:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async() => {
    const result = await axios.get(`http://16.170.196.198:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 rounded border p-2 mt-2 shadow">
          <h2 className="text-center m-1">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="userName"
                id="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                name="email"
                id="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-primary mx-2">
              Edit
            </button>
            <NavLink to="/" className="btn btn-outline-danger mx-2">
              Cancel
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
