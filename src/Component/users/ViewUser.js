import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

import { Link, useParams } from 'react-router-dom'


export default function ViewUser() {


    const [user,setUser] = useState({
        gameno:"",
        gameName:"",
        brand:"",
        installed:"",
        uninstalled:"",
        averageTime:""
    })
    const loadUser=async()=>{
      const result = await axios.get(`http://localhost:8080/get/${gameno}`)
      setUser(result.data)
    }

    const {gameno} = useParams();
    useEffect(()=>{
      loadUser()
    },[])


    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
              <h2 className="text-center m-4">Team Details</h2>

              <div className="card">
                <div className="card-header">
                  Details of team:
                  <ul className="list-group list-group-flush">
                    <li className = "list-group-item">
                      <b>Gameno: </b>
                      {user.gameno}

                    </li>
                    <li className = "list-group-item">
                      <b>Game Name: </b>
                      {user.gameName}
                    </li>
                    <li className = "list-group-item">
                      <b>Brand: </b>
                      {user.brand}
                    </li>
                    <li className = "list-group-item">
                      <b>installed: </b>
                      {user.installed}
                    </li>
                    <li className = "list-group-item ">
                      <b>uninstalled: </b>
                      
                      {user.uninstalled}

                    </li>
                    <li className = "list-group-item">
                      <b>Average Points: </b>
                      {user.averageTime}

                      
                    </li>

                  </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/fetchteams"}>
                  Back to Home
              </Link>
            </div>
          </div>
        </div>
    )
}