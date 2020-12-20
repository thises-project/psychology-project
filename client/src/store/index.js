import { createStore } from  'redux';

// try to build store component 

const initialState = {
    question : ''
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);

    switch ( action.type) {
        case 'INPUT_CHANGE':
            return Object.assign({}, state, {question: action.text});

            default :
            return state;
    }
}

const store = createStore(reducer);

export default store;