import React, { useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "COD",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            toast.error("Please fill in all required fields!");
            return;
        }
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/");
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="checkout-content">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="checkout-input" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="checkout-input" />
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="checkout-input" />
                    <textarea name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required className="checkout-textarea"></textarea>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="checkout-select">
                        <option value="COD">Cash on Delivery</option>
                        <option value="UPI">UPI</option>
                        <option value="Card">Credit/Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                    <button type="submit" className="checkout-btn">Place Order</button>
                </form>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {cart.length === 0 ? <p>No items in cart</p> : cart.map((item) => (
                        <div key={item.id} className="order-item">
                            <img src={item.image} alt={item.title} className="order-img" />
                            <div className="order-details">
                                <p className="order-title">{item.title}</p>
                                <p className="order-price">₹{item.price}</p>
                            </div>
                        </div>
                    ))}
                    <h4 className="order-total">Total: ₹{cart.reduce((total, item) => total + parseFloat(item.price), 0)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
