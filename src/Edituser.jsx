import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

export const Edituser = () => {

const data= useParams()

// const {id} = useParams()

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [role, setRole] = useState('');
const [mobile, setMobile] = useState('');

const nav = useNavigate();

useEffect(() => {
    fetchData();
},[])

const fetchData = async() => {
    try{
        const result = await Axios.get(`http://localhost:3000/user/${data.id}`)
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setRole(result.data.role);
        setMobile(result.data.mobile);
    }
    catch{
        alert('Something went wrong')
    }
    
}

const updateRecord = async(e) => {
    e.preventDefault();
    alert('Successfully updated!!')
    console.log(name)
    await Axios.put(`http://localhost:3000/user/${data.id}`, {
        name:name,
        email:email,
        mobile:mobile,
        role:role,
    })
    nav('/studdata')
}

  return (
    <>
        <h1 className='text-center bg-dark text-light p-2 mt-4'>Edit User</h1>

        <form onSubmit={(e)=>updateRecord(e)}>
        <div className="container bg-dark text-light p-2">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Name:</label>
                    <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} name="studname" id=""></input>
                  </div>  
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Email:</label>
                    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@gmail.com' name="studEmail" id=""></input>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Mobile:</label>
                    <input type="number" className='form-control' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='9999999999' name="studmobile" id=""></input>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Choose Your Role:</label>
                    <select className='form-control' value={role} onChange={(e) => setRole(e.target.value)} name='studrole' id=''>
                      <option value="Front End Developer">Front End Developer</option>
                      <option value="Back End Developer">Back End Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Software Engineer">Software Engineer</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <button className='btn btn-info mt-2 text-center'>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
    </>
  )
}
