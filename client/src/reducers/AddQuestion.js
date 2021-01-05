const AddQuestion = (AddQuestion = [], action) => {
  switch (action.type) {
    case "AddQuestions":
      return action.payload;
    case "GetAllQuestions":
      return action.payload;
    case "GetAllQuestionsAndAnswers":
      return action.payload;
    case "CreateAnswer":
      return action.payload;
    case "getAllQuestionsAndAnswersForOneUser":
      return action.payload;
    default:
      return AddQuestion;
  }
};

export default AddQuestion;
