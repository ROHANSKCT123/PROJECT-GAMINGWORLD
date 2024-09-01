import React, { useEffect, useState } from 'react'
import axios from"axios";
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const [user,setUser]=useState([])

    useEffect(()=>
    {
        loadUsers(); 
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/fetchteams");
        setUser(result.data);
    };


const {id} =useParams()

    const deleteTeam = async(gameno)=>{
       await axios.delete(`http://localhost:8080/deleteteams/${gameno}`)
      loadUsers()
  }

  return (
      <div className='container'>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>TOP GROSSING GAMES</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="btn btn-outline-light" to = "/postteams">ADD GAMES</Link>
            </div>
          </nav>
          </div>
              <div className='py-4'>
              <table className="table border dark shadow">
            <thead>
              <tr>
                <th scope="col">gameno</th>
                <th scope="col">gameName</th>
                <th scope="col">brand</th>
                <th scope="col">installed</th>
                <th scope="col">uninstalled</th>
                <th scope="col">averageTime</th>
                <th scope="col">operations</th>
              </tr>
            </thead>
            <tbody>
              {
                  user.map((user,index)=>(
                      <tr>
                <th scope="row" key={index}>{index+1}</th>
                
                <td>{user.gameName}</td>
                <td>{user.brand}</td>
                <td>{user.installed}</td>
                <td>{user.uninstalled}</td>
                <td>{user.averageTime}</td>
                <td>
                  <Link className="btn btn-success mx-2" to={`/get/${user.gameno}`}>VIEW</Link>
                  <Link className="btn btn-primary mx-2" to={`/updateteams/`}>EDIT</Link>
                  <button className="btn btn-danger mx-2" onClick={()=>deleteTeam(user.gameno)}>DELETE</button>

                </td>
              </tr>
              
                  ))
              }
            </tbody>
          </table>
          <Link to={"/card"} className="btn btn-primary mx-2"> E X P L O R E</Link>
              </div>
    </div>
  )
};