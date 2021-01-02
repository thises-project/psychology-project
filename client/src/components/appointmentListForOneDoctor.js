import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ScheduleForDoctor from "./scheduleForDoctor"
// import {useDispatch ,useSelector}  from 'react-redux';

const url = 'http://localhost:5000';

function AppointmentListForOneDoctor (){
    // console.log(props.match.params,"props is ")
   const currentId = window.localStorage.doctorId;
    // const date = props.match.params.date
   
    const [doctorAppointment , setdoctorAppointment] = useState({
        appointment :[]
    })
    useEffect(() => {
       axios.get(`${url}/appointment/getAppointmentForDoctor/${currentId}`)
       .then(res=>{
           
        setdoctorAppointment({appointment : res.data})
           
          //  console.log(res.data)
          //  console.log(doctorAppointment.appointment , "hiiiiiiiiiiiiiiiiiiiii") 
       })
       .catch(err =>{
        console.log(err)
    })
    },[window.localStorage.doctorId]);


    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>My Appointment</h2>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Patient Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
             
                  
                
           
            {doctorAppointment.appointment.map((appointment) =>(
              <tbody>
                <td>{appointment.userName}</td>
                <td> {appointment.date}</td>
                <td>{appointment.startTime}</td> 
                <td>{appointment.endtime}</td>
                
                </tbody>
              
            )
            )}
               
               </table>

               <div>
               <ScheduleForDoctor />
               </div>
        </div>
    )

}
export default AppointmentListForOneDoctor;