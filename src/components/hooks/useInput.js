import { useState } from "react";

export function useInput(defualtValue, validationFun){
    const [enteredValue, setEnteredValue] = useState(defualtValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsvalid = validationFun(enteredValue);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }
    
      function handleInputBlur() {
        setDidEdit(true);
      }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError : didEdit && !valueIsvalid
    }
}