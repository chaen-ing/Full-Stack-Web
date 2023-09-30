import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

// 유저 등록 페이지
export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const[user,setUsers]=useState({
      name:"",
      username:"",
      email:""  
    })

    const{name,username,email}=user

    const onInputChange =(e)=>{
      setUsers({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
      loadUsers()
    },[]);

    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user);
      navigate("/");
    };

    const loadUsers = async() =>{
      const result = await axios.get(`http://localhost:8080/user/${id}`)
      setUsers(result.data)
    }

  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt shadow">
        <h2 className="text-center m-4">Edit User</h2>

        <form onSubmit={(e)=>onSubmit(e)}>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e)=>onInputChange(e)}
          />
        </div>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your username"
          name="username"
          value={username}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            E-mail
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your e-mail address"
          name="email"
          value={email}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        {/* 제출버튼 */}
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        {/* 취소버튼 */}
        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancel
        </Link>
        </form>
      </div>
    </div>
  </div>;
}
