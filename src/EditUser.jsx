
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {


  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  });

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("There was an error loading the user:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/users/${id}`, user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the user:", error);
      });
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container text-center">
      <div className="col-md-8 offset-md-2 border routed p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-center">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name..."
              value={user.name}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userName" className="form-label text-center">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              placeholder="Enter your User Name..."
              value={user.userName}
              onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-center">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email..."
              value={user.email}
              onChange={onInputChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary mt-3 me-3">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mt-3"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
