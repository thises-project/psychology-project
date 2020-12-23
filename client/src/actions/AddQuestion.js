import * as api from '../api/index';

// Create question ..
export const AddQuestions = (questions) => async (dispatch) => {
    try {
        const { data } = await api.AddQuestions(questions);
        dispatch({ type: 'AddQuestions', payload: data })

    }
    catch (error) {
        console.log(error, 'failed')
    }
}

// Get all question ..
export const GetQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.GetQuestions();

        dispatch({ type: 'GetAllQuestions', payload: data });
        console.log(data);
    }
    catch (error) {
        console.log(error.message);
    }
}

// Send The Answer ..
export const createAnswer = (answer) => async (dispatch) => {
    try {
        const { data } = await api.createAnswer(answer);
        dispatch({ type: 'CreateAnswer', payload: data })

    }
    catch (error) {
        console.log(error, 'failed')
    }
}