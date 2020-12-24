import React, { useState, useEffect } from 'react';
import axios from 'axios';



function UserProfile(props) {

  const [user, setUser] = useState({})


  useEffect(() => {

    axios.get('http://localhost:5000/users/getOneUser/' + props.match.params.id)

      .then(res => {
        console.log(res.data[0])

        setUser(
          {
            userName: res.data[0].userName,
            age: res.data[0].age,
            gender: res.data[0].gender,
            email: res.data[0].email,
          }

        )
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.match.params.id])

  //  handleClick(){
  //onClick={handleClick}
  //  }

  return (

    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">User Name :</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user.userName}
            </div>
          </div>
          {/* <hr> */}
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Age :</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user.age}
            </div>
          </div>
          {/* </hr> */}
          {/* <hr> */}
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Gender :</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user.gender}
            </div>
          </div>
          {/* </hr> */}
          {/* <hr> */}
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email :</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user.email}
            </div>
          </div>
          {/* </hr> */}


        </div>
      </div><div>
        <button type="button" class="btn btn-info btn-rounded" >EDIT</button>
        <button type="button" class="btn btn-dark btn-rounded">DELETE</button>
      </div>
    </div>


  )
}

export default UserProfile;


