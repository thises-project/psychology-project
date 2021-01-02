import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function CreateDoctorsSchedule() {
    const [selectedDate, setSelectedDate] = useState({
        // const [schedule, setSchedule] = useState({
        doctorId: "",
        date: "",
        startTime: "",
        endTime: ""
    });
    const dispatch = useDispatch();
    const handleChange = (name) => (event) => {
        setSelectedDate({ ...selectedDate, [name]: event.target.value });
        console.log(selectedDate);
    };
    function handleClick(e) {
        e.preventDefault();
        console.log(selectedDate)
        axios.post("http://localhost:5000/schedule/createSchedule/" + `${window.localStorage.doctorId}`,
            { selectedDate })
            .then((res) => {
                console.log(res, " this is a res from post image");
            })
            .catch((err) => {
                console.log("there is an errrrrrrrooooorrrr", err);
            });
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Create Your Schedule</h2><br></br><br></br><br></br>
            <form name='form' >
                <div className="form-group">
                    <label for="date">Date:</label><br></br>
                    <input type="date" class="form-control" id="date" value={selectedDate.date} selected={selectedDate}
                        onChange={handleChange("date")}
                        dateFormat='yyyy/MM/dd' />
                </div>
                <div className="form-group">
                    <label for="str">startTime:</label>
                    <input type="time" class="form-control" id="str" value={selectedDate.startTime}
                        onChange={handleChange("startTime")}
                    />
                </div>
                <div className="form-group">
                    <label for="end">End Time:</label>
                    <input type="time" class="form-control" id="end" value={selectedDate.endTime}
                        onChange={handleChange("endTime")} />
                </div>
                <button type="submit" onClick={handleClick}>Add to the Schedule </button>
            </form>
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