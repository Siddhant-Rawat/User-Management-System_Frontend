import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const ViewUser = () => {
  let { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://16.170.196.198:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 rounded border p-2 mt-2 shadow">
          <h2 className="text-center m-1">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName: </b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>E-mail: </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>

          <NavLink to="/" className="btn btn-primary my-1">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
