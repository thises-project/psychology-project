import {combineReducers} from 'redux';
import  Adduser from './Adduser';
import GetAllQuestionsAndAnswers from './AddQuestion';
import AddQuestions from './AddQuestion';
import Doctors from './Doctors';

export default combineReducers({ 
     Adduser,
    AddQuestions,
    GetAllQuestionsAndAnswers,
    Doctors,
 })

