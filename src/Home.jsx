import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const {id} = useParams();

  const deleteUser = async (id) => {
    try {
      axios.delete(`http://localhost:8080/users/${id}`);
      loadUsers();
    } catch (error) {
      console.error("There was an error deleting the user:", error);
    }
  };

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("There was an error loading the users:", error);
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>   
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                  <Link to = {`/viewuser/${user.id}`} className="btn btn-primary mx-2">View</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                  <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-2">Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


