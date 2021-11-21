import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; // Converts string to number

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return <form className="form" onSubmit={submitFormHandler}>
        <Input ref={amountInputRef} label="Menge" input={
            {
                id: nanoid(),
                type: "number",
                min: "1",
                max: "10",
                step: "1",
                default: "1"
            }
        } />
        <button><FontAwesomeIcon icon={faCheck}/></button>
        {!amountIsValid && <p>Menge muss zwischen 1 und 10 liegen</p>}
    </form>
};

export default MealItemForm;