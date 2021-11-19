import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Input from "../../UI/Input";

const MealItemForm = (props) => {

    return <form className="form">
        <Input label="Menge" input={
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
    </form>
};

export default MealItemForm;