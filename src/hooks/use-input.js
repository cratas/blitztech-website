import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducerFunction = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'INPUT':
            return {value: action.value, isTouched: state.isTouched};
        case 'BLUR':
            return {isTouched: true, value: state.value};
        case 'RESET':
            return { isTouched: false, value: ''};
        case 'SUBMIT':
            return { isTouched: true, value: action.value}
        }
    
    return initialInputState;
}

const useInput = (validateValue) => {
    const[inputState, dispatch] = useReducer(inputStateReducerFunction, initialInputState)

 

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  };

  const inputBlurHandler = (event) => {
    dispatch({type: 'BLUR'});
  };

  const reset = () => {
    dispatch({type: 'RESET'});
  };


  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;