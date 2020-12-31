import Axios from 'axios';
import React, { useEffect  ,useState} from 'react';
// import axios from 'axios'
//use Selector to fetch data from global store 
const url = 'http://localhost:5000';

function UserQuestionsAnswers (){

        const[questionInfo , setQuestionInfo]  = useState({
           questions:[]
        })
        useEffect(()=>{
            Axios.get(`${url}/questions/getAllQuestionsAndAnswersForOneUser/${window.localStorage.userId}`)
            .then(res=>{
                console.log(res.data)
                setQuestionInfo({ questions : res.data })
                 
            })
            .catch(err =>{
                console.log(err)
            })
        }, [window.localStorage.userId])
        return (
            <div>
                <h2>User Questions Answers</h2>
                <div>
                    {questionInfo.questions.map((questions) =>(
                   <ul>
                        <li>{questions.question}</li> 
                        <li>{ questions.answer}</li> 
                        <li>Dr.{questions.doctorName}</li> 
                 </ul>

                    ) ) }
                </div>

                    
            </div>
        )
    }
    
    export default  UserQuestionsAnswers;