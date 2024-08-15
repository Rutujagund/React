import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Studdata from './Studdata';
import { Navbar } from './Navbar';
import { Edituser } from './Edituser';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Studdata' element={<Studdata/>}></Route>
          <Route path='/Edituser/:id' element={<Edituser/>}></Route>

          <Route path='*' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;