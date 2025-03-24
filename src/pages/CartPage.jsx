import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cart
            .reduce((total, item) => total + (Number(item.price) || 0) * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="shop-now-btn">Shop Now</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-title">{item.title}</h3>
                                    <p className="cart-item-price">
                                        ₹{(Number(item.price) || 0).toFixed(2)}
                                    </p>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ₹{getTotalPrice()}</h3>
                        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;

