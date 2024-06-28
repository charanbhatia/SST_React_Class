import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addToCart,removeFromCart} from "../../store/Cart";
function AddToCart({ product }) {
    // useSelector
    let dispatch=useDispatch();
    function increase() {
        //dispatcher
        dispatch(addToCart(product));
    }
    function decrease() {
        //dispatcher
        dispatch(removeFromCart(product));
    }

    let cart = useSelector((state) => {
        return state.cart.items;
    });

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
                    <span>+</span>
                </button>
                <span>{quantity}</span>
                <button onClick={decrease}>
                    <span>-</span>
                </button>
            </div>
        );
    }
}

export default AddToCart;
