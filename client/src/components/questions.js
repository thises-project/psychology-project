//Add Filter ..
import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion"



function QuestionsList() {

    const dispatch = useDispatch();
    // use selector to get access to all global store or all gllobal state  
    const questionAndAnswersList = useSelector((state) => state.GetAllQuestionsAndAnswers)
    console.log(questionAndAnswersList)

    useEffect(() => {
        dispatch(GetAllQuestionsAndAnswers())
    }, [dispatch]);

    const [questions, setQuestions] = useState({
        inputFilter: 'all',
    })

    function handleFilter(e) {

        setQuestions({
            inputFilter: e.target.value,
        })
        // console.log(e.target.value)
    }

    function onFilter() {

        return (
            <div>
                <label>Choose Counseling Type ..</label><br />
                <select name="inputFilter" onChange={handleFilter} value={questions.inputFilter}>
                    <option value="all" selected="selected"> All </option>
                    <option value="Teenager Counseling" > Teenager Counseling </option>
                    <option value="Couple Counseling" > Couple Counseling </option>
                    <option value="Individual Counseling" > Individual Counseling </option>
                </select>
            </div>
        )
    }
    var filterValue = false;
    if (questions.inputFilter === "all") {
        filterValue = true;
    }

    return (

        <div className="containe">
            <div>{onFilter()}</div>
            {filterValue === false ?

                <div>


                    <h1>Questions</h1>

                    {questionAndAnswersList.filter(question => question.questionType == questions.inputFilter).map(filteredQuestions => (
                        <div className="questionList" >
                            <h3 className="list-group-item question">{filteredQuestions.question}</h3>
                            <h3 className="list-group-item answer">{filteredQuestions.answer}</h3>
                            <h5 className="list-group-item Dr">Dr. {filteredQuestions.doctorName}</h5>
                            {/* <h2>{questions.user_Id}</h2> */}
                        </div>

                    ))}
                </div>
                :
                <div>
                    <h1>Questions</h1>
                    {questionAndAnswersList.map((questions) => (
                        <div className="questionList" >
                            <h3 className="list-group-item question">{questions.question}</h3>
                            <h3 className="list-group-item answer">{questions.answer}</h3>
                            <h5 className="list-group-item Dr">Dr. {questions.doctorName}</h5>
                            {/* <h2>{questions.user_Id}</h2> */}
                        </div>
                    ))}

                </div>
            }

        </div>

    )


}

export default QuestionsList;