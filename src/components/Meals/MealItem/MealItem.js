import { Fragment, useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(2)} €`;

    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    }

    return <Fragment>
        <div className="meal">
        <li>
        <div><h3>{props.name}</h3></div>
        <div className="description">{props.description}</div>
        </li>
        <li className="meal__price">
            <div>{price}</div>
        </li>
        <MealItemForm onAddToCart={addItemToCartHandler}/>
        </div>
        </Fragment>
};

export default MealItem;