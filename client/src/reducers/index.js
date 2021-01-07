import { combineReducers } from "redux";
import Adduser from "./Adduser";
import GetAllQuestionsAndAnswers from "./AddQuestion";
import AddQuestions from "./AddQuestion";

import bookAppointment from "./Appointment";
import getScheduleForUser from "./schedule";

import Doctors from "./Doctors";

export default combineReducers({
  Adduser,
  AddQuestions,
  GetAllQuestionsAndAnswers,
  bookAppointment,
  Doctors,
  getScheduleForUser,
});
