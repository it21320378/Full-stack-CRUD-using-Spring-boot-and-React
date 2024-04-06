import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

  let navigate=useNavigate();

  const [user, setUser]=useState({
      name:"",
      username:"",
      email:""
  });

  const [errors, setErrors] = useState({}); {/*===*/}

  const{name, username, email}= user;

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value});
  };

  const validateForm = (e) => {  {/*===start*/}
      let isValid = true;
      const errors={};

      if(!name.match(/^[a-zA-Z\s]+$/)){
          errors.name="Name can contain only letters.";
          isValid=false;
      }

      if(!username.trim()){
          errors.username="Username is required.";
          isValid=false;
      }

      if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
          errors.email="Invalid email format.";
          isValid=false;
      }

      setErrors(errors);
      return isValid;
  }; {/*===end*/}

  const onSubmit= async (e)=>{
    e.preventDefault();
    if(validateForm()){   {/*===*/}
      await axios.post("http://localhost:8072/user", user);  {/*===*/}
      navigate("/");
    }  {/*===*/}
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>

            <form onSubmit={(e)=> onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor="Name" className="form-label">Name</label>
              <input type="text" className="form-control" 
              placeholder="Enter your name" name="name"
              value={name} onChange={(e)=>onInputChange(e)} required/> {/*===*/}
{errors.name && <div className="text-danger">{errors.name}</div>} {/*===*/}
            </div>
            <div className='mb-3'>
              <label htmlFor="Username" className="form-label">Username</label>
              <input type="text" className="form-control" 
              placeholder="Enter your username" name="username" 
              value={username} onChange={(e)=>onInputChange(e)} required/> {/*===*/}
{errors.username && <div className="text-danger">{errors.username}</div>} {/*===*/}              
            </div>
            <div className='mb-3'>
              <label htmlFor="Email" className="form-label">E-mail</label>
              <input type="text" className="form-control" 
              placeholder="Enter your e-mail address" name="email" 
              value={email} onChange={(e)=>onInputChange(e)} required/> {/*===*/}
{errors.email && <div className="text-danger">{errors.email}</div>} {/*===*/}              
            </div>
            <button type="submit" className='btn btn-outline-primary'>
              Submit
            </button>
            <Link className='btn btn-outline-danger mx-4' to="/">
              Cancel
            </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
