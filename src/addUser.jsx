import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {


    let navigate = useNavigate();


    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: ""
    });
    

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        axios.post("http://localhost:8080/users", user);

        navigate("/");
    }


    

    return (
        <div className='container text-center'>
            <div className='col-md-8 offset-md-2 border routed p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add User</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label text-center'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            name="name"
                            className="form-control"
                            placeholder="Enter your name..."
                            value={user.name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="userName" className='form-label text-center'>
                            User Name
                        </label>
                        <input
                            type={"text"}
                            name="userName"
                            className="form-control"
                            placeholder="Enter your User Name..."
                            value={user.userName}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label text-center'>
                            Email
                        </label>
                        <input
                            type={"text"}
                            name="email"
                            className="form-control"
                            placeholder="Enter your email..."
                            value={user.email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className='btn btn-outline-primary mt-3'>Submit</button>
                        <button type="button" className='btn btn-outline-danger mt-3 mx-3' onClick={() => window.location.href="/"}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
