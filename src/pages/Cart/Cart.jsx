
import Navbar from "../../Component/Navbar";
import style from "./Cart.module.css"

export default function Cart({ cartItems=[], increment, decrement }) {
    const totalPrice = cartItems.reduce((acc, item) => {
        const discountedPrice = item.price - item.discount;
        return acc + discountedPrice * item.quantity;
    }, 0);
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    if (cartItems.length === 0) {
        return (<>
            <Navbar totalCartCount={0} />
            <div className={style.emptyCart}>Your Cart is Empty.</div>
            
        </>);
    }
    return (
        <>
            <Navbar totalCartCount={totalQuantity} />
            <div className={style.CartWrapper}>
                <h2 className={style.heading}>your Cart</h2>
                <ul className={style.cartList}>
                    {cartItems.map(({ id, title, image, price, discount, quantity }) => {
                        const discountedPrice = price - discount;
                        const subtotal = discountedPrice * quantity;
                        return (
                            <li key={id} className={style.cartItem}>
                                <img src={image} alt={title} className={style.productImage} />
                                <div className={style.itemDetails}>
                                    <h3 className={style.productTitle}>{title}</h3>
                                    <p className={style.price}>
                                        price: ₹{discountedPrice.toFixed(2)}
                                    </p>
                                    <div className={style.quantityControl}>
                                        <button className={style.qtyBtn}
                                            onClick={() => decrement(id)}
                                            aria-label={`Decrease quantity of ${title}`}>-</button>

                                        <span className={style.quantityDisplay}>
                                            {quantity}
                                        </span>
                                        <button className={style.qtyBtn}
                                            onClick={() => increment(id)}
                                            aria-label={`Increase quantity of ${title}`}>
                                            +
                                        </button>

                                    </div>
                                </div>
                                <div className={style.subtotal}>
                                    <p>subtotal</p>
                                    <p>₹{subtotal.toFixed(2)}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={style.cartSummary}>
                    <p><strong>Total Items : </strong> {totalQuantity}</p>
                    <p><strong>Total Price : </strong> ₹{totalPrice.toFixed(2)}</p>

                </div>
                <button className={style.checkoutBtn}
                    onClick={() => alert("Proceed to checkout")}
                    aria-label="Proceed to checkout">
                        Checkout

                </button>
            
            </div>
        
        </>
    );

}