import {useContext} from "react";
import CartContext from "../../Context/CartContext";

function AddToCart({ product}) {
    const {cart,increaseQuantity,decreaseQuantity}=useContext(CartContext);
    function increase() {
        increaseQuantity(product);
    }
    function decrease() {
        decreaseQuantity(product);
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <div>
                    <button onClick={increase}>AddToCart</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={increase}>
                    <p>+</p>
                </button>
                <span>{quantity}</span>
                <button onClick={decrease}>
                    <p>-</p>
                </button>
            </div>
        );
    }
}

export default AddToCart;