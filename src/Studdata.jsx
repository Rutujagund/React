import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from "react-router-dom";

const Studdata = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  loaddata();
},[])

  const loaddata = async() => {
    try{
      const result = await Axios.get('http://localhost:3000/user');
      console.log(result.data);
      setData(result.data);
    }
    catch{
      console.log('error')
    }
  }

  const deleteRecord = async(id) => {
    await Axios.delete(`http://localhost:3000/user/${id}`)
  }

  return (
    <>
      <h1 className='text-center bg-info fw-bold p-2'>User Records</h1>
      <table className='table table-bordered text-center table-hover'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val,index)=>{
              return(
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.mobile}</td>
                  <td>{val.role}</td>
                  <td><i className='text-danger fa fa-trash' onClick={() => deleteRecord(val.id)}></i></td>
                  <td><NavLink to={`/Edituser/${val.id}`}><i className='text-primary fa fa-edit'></i></NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
};

export default Studdata;