// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";
// import { Dropdown } from 'react-bootstrap';
// import { NotificationManager } from 'react-notifications';

// function Notification(val) {
//     const dispatch = useDispatch();
//     // use selector to get access to all global store or all gllobal state
//     const questionAndAnswersList = useSelector((state) => state.GetAllQuestionsAndAnswers)
//     useEffect(() => {
//         dispatch(GetAllQuestionsAndAnswers())
//     }, [dispatch]);
//     console.log(questionAndAnswersList, "test filter");
//     function onClickOption() {
//         // window.location = '/UserQuestionsAnswers'
//     }
//     if (val) {
//         return (

//             <div>
//                 <Dropdown>
//                     <Dropdown.Toggle variant="info" id="dropdown-basic">
//                         Notification
//                 </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                         {questionAndAnswersList.filter(questions => questions.user_Id == window.localStorage.userId).map(filterQuestion => (
//                             <Dropdown.Item href="http://localhost:3000/UserQuestionsAnswers/:id">  Dr. {filterQuestion.doctorName}  answered your question</Dropdown.Item>
//                         ))}
//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>
//         )
//     }
// }

// export default Notification;














