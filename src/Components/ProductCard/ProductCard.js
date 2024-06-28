import "./ProductCard.css";
import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart.js";

import { useRef} from "react";

function ProductCard({ product}) {
    let pRef = useRef(0);
    function printTitle() {
        console.log("Price show");
        if (pRef.current.className === "hide") {
            pRef.current.className = "show";
        } else {
            pRef.current.className = "hide";
        }

        console.log(pRef.className);
    }
    return (
        <div>
            <div className="product-card">
                <p onClick={printTitle}>{product.title}</p>
                <p ref={pRef} className="show">
                    {product.price.value}
                </p>
                <ReduxAddToCart
                    product={product}
                />
            </div>
        </div>
    );
}
export default ProductCard;