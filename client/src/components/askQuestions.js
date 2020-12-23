import React from "react";
import { connect } from "react-redux";

// build ask question component
// take the input value

function AddQuestion(prpos) {
  return (
    <div>
      <input
        type="text"
        value={prpos.question}
        onChange={prpos.questionChanged}
      />
      <form onSubmit={prpos.handleSubmit}>
        <button type="submit"> ASK </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    question: state.question,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    questionChanged: (evt) => {
      const action = { type: "INPUT_CHANGE", text: evt.target.value };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
