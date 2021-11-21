import { useContext } from "react";
import { nanoid } from "nanoid";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1});
    };

    const cartItems = 
        <ul className="cart-items">
            {cartCtx.items.map(item => 
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}/>
            )}</ul>;

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className="total">
            <span>Gesamtbetrag</span>
            <span>{totalAmount}</span>
        </div>
        <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Schließen</button>
            {hasItems && <button className="button">Bestellen</button>}
        </div>
    </Modal>
};

export default Cart;