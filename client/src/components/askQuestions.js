import React from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import reducer from '../store/index';
import {  useState } from "react";
import { useDispatch}  from 'react-redux';
// import questions from '../../../server/app/controller/questions';
import {AddQuestions} from '../actions/AddQuestion'; 

// build ask question component 
// take the input value 


function AddQ() {


    const [questions, setQuestion] = useState({
        question :'',
        
    });


    const dispatch = useDispatch();




        
    function handleChange(e)  {

        const { name, value } = e.target;

        console.log(e.target.value)
        setQuestion (questions => ({...questions,[name]:value}));
    }

    function handleSubmit(e) {
        console.log(questions)
        
            e.preventDefault();
                
             dispatch(AddQuestions(questions))
           

        }
    
    return (
        <div >
        <p>WE ARE HERE FOR YOU ..</p>
        <p>How can we help you ?</p>
           <form onSubmit={handleSubmit}>
                <input type="text" name="question" value={questions.question} onChange={handleChange}/>
                <button type='submit'> ASK </button>
           </form>
        </div>
    );
}



// function sendPostRequest(props) {
//     var handleSubmit=() =>{

//     }
//     // return {
//     //     question : state.question
//     //         // evt.preventDefault();
//     //         // const question = {question};
//     //     }
//         //     console.log(question);
//         // axios.post("http://localhost:3000/addItems/add", question)
//         // .then(res => console.log(res.data));
// }


export default AddQ ;