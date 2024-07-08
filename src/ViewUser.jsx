import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
  const { id } = useParams();  // Make sure useParams is called before using `id`
  
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: ""
  });

  useEffect(() => {
    loadUser();
  }, []);  

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("There was an error loading the user:", error);
    }
  };

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 border routed p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>User Details</h2>

          <div className='card'>
            <div className='card-body'>
              Details of user id: {id}
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Name: {user.name}</li>
                <li className='list-group-item'>User Name: {user.userName}</li>
                <li className='list-group-item'>Email: {user.email}</li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-outline-primary' to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}

