// // import { acquireConnection } from "../../../server/app/Models/database";
// // import { FETCH_ALL, CREATE, UPDATE}


export default ( AddQuestion = [], action) => {
    switch (action.type){
        case 'AddQuestions':
            return  action.payload;
        default:
            return AddQuestion;
    }
}
// // export default AskQuestion;