import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className="button" onClick={props.onClick}>
        <span><FontAwesomeIcon className="icon" icon={faUtensils} size="2x" /></span>
        <span>Deine Mahlzeit(en)</span>
        <span className="badge">{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;