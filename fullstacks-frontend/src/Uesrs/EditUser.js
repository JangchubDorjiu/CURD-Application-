import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function EditUser() {
    let navigate = useNavigate();
    const [user, setUsers] = useState({
        name:'',
        username:'',
        email:'',
    })
    const{name, username, email} = user
    const onInputChange = (e) =>{
    setUsers({...user,[e.target.name]: e.target.value})
    }

    const {id}=useParams()

    useEffect(() =>{
            loadUsers();
    },[]);

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/");

    }
    const loadUsers = async () =>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data)
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
                Name
            </label>
            <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your Name'
                name='name' 
                value={name}   
                onChange={(e)=>onInputChange(e)}  
                />
             </div>
             <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
                UserName
            </label>
            <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your UserName'
                name='username'   
                value={username}   
                onChange={(e)=>onInputChange(e)}  
                />
             </div>
             <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
                E-mail
            </label>
            <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your Email Address'
                name='email' 
                value={email}
                onChange={(e)=>onInputChange(e)}  
                />
             </div>
             <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <button type="submit" className="btn btn-outline-primary m-2">submit</button>
                   <Link className="btn btn-outline-danger m-2" to="/">cancel</Link>
            </div>  
            </form>    
        </div>
    </div>
    </div>
  )
}
