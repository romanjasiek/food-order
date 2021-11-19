import { Fragment } from "react";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    const price = `${props.price.toFixed(2)} €`;

    return <Fragment>
        <div className="meal">
        <li>
        <div><h3>{props.name}</h3></div>
        <div className="description">{props.description}</div>
        </li>
        <li className="meal__price">
            <div>{price}</div>
        </li>
        <MealItemForm />
        </div>
        </Fragment>
};

export default MealItem;