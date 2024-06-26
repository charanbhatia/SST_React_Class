
function Cart({cart}){
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {Object.keys(cart).map((key)=>{
                    return <li>{cart[key].title} - {cart[key].quanitity}</li>
                })}
            </ul>
        </div>
    );
}
export default Cart;