import React from 'react';
import { connect } from 'react-redux';
// import reducer from '../store/index';


// build ask question component 
// take the input value 

function AddQuestion(prpos) {

    return (
        <div>
                <input type="text" value={prpos.inputValue} onChange={prpos.inputChanged}/>
                <button type='submit'> ASK </button>
                <p>{prpos.inputValue} </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged:(evt)=>{
            
            const action = { type:'INPUT_CHANGE',text:evt.target.value};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion) ;