import React, { Component } from 'react';
import Axios from 'axios'

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      name:'',
      email:'',
      mobile:'',
      role:'',
    }
  }

  UserRecords = async(e) => {
    e.preventDefault();
    alert('Submitted successfully!!')

    console.log(this.state)
    await Axios.post('http://localhost:3000/user', this.state)
    this.setState({
      name:'',
      email:'',
      mobile:'',
      role:'',
    })
  }

  render() {
    return (
      <>
        <h1>User Registration</h1>
        <form onSubmit={(e)=>this.UserRecords(e)}>
        <div className="container bg-dark text-light p-2">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Name:</label>
                    <input type="text" className='form-control' value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} name="studname" id=""></input>
                  </div>  
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Email:</label>
                    <input type="email" className='form-control' value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} placeholder='abc@gmail.com' name="studEmail" id=""></input>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Enter Your Mobile:</label>
                    <input type="number" className='form-control' value={this.state.mobile} onChange={(e) => this.setState({mobile:e.target.value})} placeholder='9999999999' name="studmobile" id=""></input>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="">Choose Your Role:</label>
                    <select className='form-control' value={this.state.role} onChange={(e) => this.setState({role:e.target.value})} name='studrole' id=''>
                      <option value="Front End Developer">Front End Developer</option>
                      <option value="Back End Developer">Back End Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Software Engineer">Software Engineer</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12">
                  <button className='btn btn-info mt-2 text-center'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </>
    )
  }
}

