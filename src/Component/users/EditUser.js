import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EditUser() {


    let navigate =useNavigate()

    const [user,setUser] = useState({
        gameno:"",
        gameName:"",
        brand:"",
        installed:"",
        uninstalled:"",
        averageTime:""
    })


        const onInputChange  =  (e)=>{

            setUser({...user,[e.target.name]:e.target.value})
        }

        const {gameno,gameName,brand, installed, uninstalled,  averageTime} = user
        const onSubmit= async (e)=>{
            
            e.preventDefault();
            await axios.put("http://localhost:8080/updateteams",user);
            navigate("/")

        }

        

   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Edit team</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Number" className="form-label">
              Gmae Number
            </label>
            <input 
            type={"Number"}
            className="form-control border-dark shadow"
            placeholder="Enter Game Number"
            name="gameno"
            value={gameno}
            onChange={(e)=>onInputChange(e)} >
              
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Game Name
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter game name"
            name="gameName"
            value={gameName}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Brand
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter Brand"
            name="brand"
            value={brand}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Installed
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of installer"
            name="installed"
            value={installed}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Uninstalled
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of uninstaller"
            name="uninstalled"
            value={uninstalled}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              AverageTime
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter averageTime"
            name="averageTime"
            value={averageTime}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/fetchteams">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
  
}
