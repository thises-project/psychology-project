import {combineReducers} from 'redux';
import  Adduser from './Adduser';
import  UPDATE from './Adduser';
import GetAllQuestionsAndAnswers from './AddQuestion';
import AddQuestions from './AddQuestion';

export default combineReducers({ 
     Adduser,
    AddQuestions,
   // UPDATE,
    GetAllQuestionsAndAnswers,
 })

