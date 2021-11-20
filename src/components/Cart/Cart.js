const Cart = (props) => {

    const cartItems = <ul className="cart-items">{[{
        id: "m1",
        name: "Sushi",
        amount: 2,
        price: 16.99,
    }].map(item => <li>{item.name}</li>)}</ul>;

    return <div>
        {cartItems}
        <div className="total">
            <span>Gesamtmenge</span>
            <span>2</span>
        </div>
        <div className="actions">
            <button className="actions button--alt">Schließen</button>
            <button className="actions button">Bestellen</button>
        </div>
    </div>
};

export default Cart;