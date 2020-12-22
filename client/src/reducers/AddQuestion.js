// eslint-disable-next-line
export default (AddQuestion = [], action) => {
    switch (action.type) {
        case 'AddQuestions':
            return action.payload;
        case 'GetAllQuestions':
            return action.payload;
        default:
            return AddQuestion;
    }
}