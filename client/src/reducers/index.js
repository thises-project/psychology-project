import {combineReducers} from 'redux';
import  Adduser from './Adduser';
import GetAllQuestionsAndAnswers from './AddQuestion';
import AddQuestions from './AddQuestion';
import userQuestion from './Adduser'
import bookAppointment from './Appointment';


export default combineReducers({ 
     Adduser,
    AddQuestions,
    GetAllQuestionsAndAnswers,
    bookAppointment
 })

