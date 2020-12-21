import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import reducer from '../store/index';


// build ask question component 
// take the input value 


function AddQuestion(prpos) {

    return (
        <div>
                <input type="text" value={prpos.question} onChange={prpos.questionChanged}/>
            <form onSubmit={prpos.handleSubmit}>
                <button type='submit'> ASK </button>
           </form>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        question : state.question
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        questionChanged:(evt)=>{
            
            const action = { type:'INPUT_CHANGE',text:evt.target.value};
            dispatch(action);
        }

    }
}
// function sendPostRequest(props) {
//     var handleSubmit=() =>{

//     }
//     // return {
//     //     question : state.question
//     //         // evt.preventDefault();
//     //         // const question = {question};
//     //     }
//         //     console.log(question);
//         // axios.post("http://localhost:3000/addItems/add", question)
//         // .then(res => console.log(res.data));
// }


export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion) ;