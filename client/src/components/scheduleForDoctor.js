import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import {useDispatch ,useSelector}  from 'react-redux';

const url = "http://localhost:5000";

function ScheduleForDoctor() {
  // console.log(props.match.params,"props is ")
  const currentId = window.localStorage.doctorId;
  // const date = props.match.params.date

  const [doctorSchedule, setDoctorSchedule] = useState({
    schedules: [],
  });
  useEffect(() => {
    axios
      .get(`${url}/schedule/getScheduleForDoctor/${currentId}`)
      .then((res) => {
        setDoctorSchedule({ schedules: res.data });

        console.log(res.data);
        console.log(doctorSchedule.schedules[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.doctorId]);

  return (
    <div className="col-lg-8 offset-lg-2">
      
    </div>
  );
}
export default ScheduleForDoctor;



/**
 * 
 */
