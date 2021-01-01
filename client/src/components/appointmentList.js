import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {useDispatch ,useSelector}  from 'react-redux';

const url = 'http://localhost:5000';

function AppointmentList (){
    // console.log(props.match.params,"props is ")
   const currentId = window.localStorage.userId;
    // const date = props.match.params.date
   
    const [appointment , setAppointment] = useState({
        myAppointment :[]
    })
    useEffect(() => {
       axios.get(`${url}/appointment/getAppointmentForOneUser/${currentId}`)
       .then(res=>{
           
           setAppointment({myAppointment : res.data})
           console.log(appointment.myAppointment)
           console.log(res.data)
       })
       .catch(err =>{
        console.log(err)
    })
    },[currentId]);


    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>My Appointment</h2>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Doctor Name</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                  {appointment.myAppointment.map((myAppointment)=>{
                   <ul>
                       <li>{myAppointment.doctorName}</li>
                      <li>{myAppointment.date}</li>
                      <li>{myAppointment.startTime} - {myAppointment.endtime}</li>
                   </ul>
                     
                     
                  })}
                </tbody>
              
            </table>
            
            
        </div>
    )

}
export default AppointmentList;