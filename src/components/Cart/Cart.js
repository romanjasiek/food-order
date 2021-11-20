import { nanoid } from "nanoid";

import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartItems = <ul className="cart-items">{[{
        id: nanoid(),
        name: "Sushi",
        amount: 2,
        price: 16.99,
    }].map(item => <li>{item.name}</li>)}</ul>;

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className="total">
            <span>Gesamtmenge</span>
            <span>2</span>
        </div>
        <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Schließen</button>
            <button className="button">Bestellen</button>
        </div>
    </Modal>
};

export default Cart;