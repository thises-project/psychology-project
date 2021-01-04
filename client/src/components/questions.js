import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";
import Footer from "./footer";
import { FaCommentMedical } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function QuestionsList() {
  const dispatch = useDispatch();
  const questionAndAnswersList = useSelector(
    (state) => state.GetAllQuestionsAndAnswers
  );
  console.log(questionAndAnswersList);

  useEffect(() => {
    dispatch(GetAllQuestionsAndAnswers());
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

        <div
          className="container w-100"
          style={{
            textAlign: "left",
            backgroundColor: "beige",
            alignSelf: "center",
            width: "100%",
          }}>


          <h2 style={{ marginLeft: 15, marginRight: 10, marginTop: 20 }}>
            {" "}
          Recent SpeakOut's
        </h2>

          {questionAndAnswersList.filter(question => question.questionType == questions.inputFilter).map(filteredQuestions => (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "blue",
                marginTop: 20,
                marginBottom: 20,
              }}>
              <h3 className="list-group-item question">{filteredQuestions.question}</h3>
              <h3 className="list-group-item answer">{filteredQuestions.answer}</h3>
              <h5 className="list-group-item Dr">Dr. {filteredQuestions.doctorName}</h5>
              {/* <h2>{questions.user_Id}</h2> */}
            </div>

          ))}
          {/* footer div */}
          <div
            className="container w-100 mt-5 mb-5"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Footer />
          </div>
          {/* footer div ends*/}
        </div>
        :
        <div
          className="container w-100"
          style={{
            textAlign: "left",
            backgroundColor: "beige",
            alignSelf: "center",
            width: "100%",
          }}>

          <h2 style={{ marginLeft: 15, marginRight: 10, marginTop: 20 }}>
            {" "}
          Recent SpeakOut's
          </h2>
          {questionAndAnswersList.map((questions) => (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "blue",
                marginTop: 20,
                marginBottom: 20,
              }} >
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginTop: 25,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaComment style={{ marginRight: 20 }} size={25} />
              User: {questions.question}
              </div>
              <h3 className="list-group-item answer">{questions.answer}</h3>
              {/* doctor */}
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginBottom: 25,
                  marginTop: 10,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaCommentMedical style={{ marginRight: 20 }} size={25} />
              Dr. {questions.doctorName}: {questions.answer}
              </div>
            </div>
          ))}
          {/* footer div */}
          <div
            className="container w-100 mt-5 mb-5"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Footer />
          </div>
          {/* footer div ends*/}
        </div>


      }
    </div>
  );
}

export default QuestionsList;
