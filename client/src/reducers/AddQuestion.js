// // import { acquireConnection } from "../../../server/app/Models/database";
// // import { FETCH_ALL, CREATE, UPDATE}


export default ( AddQuestion = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return AddQuestion;
        case 'CREATE':
            return AddQuestion;
        default:
            return AddQuestion;
    }
}
// // export default AskQuestion;