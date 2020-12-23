import React , {useEffect }from 'react';
import { GetQuestions } from '.././actions/AddQuestion';
import { useDispatch , useSelector } from 'react-redux';


const DoctorQuestions = () => {
    const dispatch = useDispatch();
    const AddQuestion = useSelector((state) => state.AddQuestions );

    useEffect(() => {
        dispatch(GetQuestions())
    }, [dispatch]);
 
    // console.log(AddQuestion);
        return (
            <div>
            <h2>Questions</h2>
                {AddQuestion.map((question) =>(
                    question.question
                    
                ))}
                
            </div>
        )
}

export default DoctorQuestions;