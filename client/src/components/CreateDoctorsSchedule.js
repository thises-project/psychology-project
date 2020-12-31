import React from 'react';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function CreateDoctorsSchedule (){
    const [selectedDate , setSelectedDdate] = useState(null)
    const [schedule , setSchedule] =useState({
       
        doctor_Id : "",
        date      : "",
        startTime : "",
        endtime   : ""
    });
    
    const dispatch = useDispatch();

    function handleChange (e){
    }



    function handleSubmit (e){
        e.preventDefault();
    }
   
    return (

         <div className="col-lg-8 offset-lg-2">
            <h2>Create Your Schedule</h2>
            <div className = "form-group">
                <label for="date">Date:</label>

                    <DatePicker type="text" class="form-control" id ="date"selected={selectedDate} 
                     onChange = {date =>{setSelectedDdate(date)}} 
                     dateFormat = 'yyyy/MM/dd' />
                    </div>

             <div className = "form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"/>
            </div>



       
             {/* <form name = 'form' onSubmit ={handleSubmit}>
                <div className = "form-group">
                    <label>Date</label>
                   <DatePicker selected={selectedDate} 
                   onChange = {date =>{setSelectedDdate(date)}} 
                   dateFormat = 'yyyy/MM/dd' />
                </div>
                <input data-provide="datepicker"></input>
                <div className = "form-group">
                    <label>Time</label>
                    <select 
                    required
                    className = "form-control"
                    >
                        <option></option>
                    </select>
                </div>
                <div className = "form-group">
                    <label></label>
                          <DatePicker id="example-datepicker"  onChange={handleChange} />
                </div>
                <div className="form-group row">
                    <label for="example-date-input" className="col-2 col-form-label">Date</label>
                    <div class="col-10">
                        <input className="form-control" type="date" value="2011-08-19" id="example-date-input"/> 
                    </div>
                </div>
                <div className="form-group row">
                <label for="example-time-input" className="col-2 col-form-label">Time</label>
                <div className="col-10">
                    <input className="form-control" type="time" value="13:45:00" id="example-time-input"/>
                </div>
                </div>
            </form> */}
        </div> 
    )
}
export default CreateDoctorsSchedule;