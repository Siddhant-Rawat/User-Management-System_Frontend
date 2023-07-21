import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://16.170.196.198:8080/users");
    setUsers(result.data);
    // console.log(result.data);
  };

  const deleteUser = async(id) => {
    await axios.delete(`http://16.170.196.198:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">UserName</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <NavLink to={`/viewuser/${user.id}`} className="btn btn-primary mx-1 py-1">View</NavLink>
                    <NavLink
                      to={`/edituser/${user.id}`}
                      className="btn btn-warning mx-1 py-1"
                    >
                      Edit
                    </NavLink>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger mx-1 py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
