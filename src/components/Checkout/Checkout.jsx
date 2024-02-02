import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../notification/NotificationService";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    });
    const { cart, total, clearCart } = useCart();
    const { showNotification } = useNotification();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const createOrder = async () => {
        setLoading(true);
        try {
            const orderRef = await addDoc(collection(db, "orders"), {
                buyer: userData,
                items: cart,
                total,
                createdAt: serverTimestamp()
            });
            setOrderId(orderRef.id);
            showNotification("success", "Order created successfully");
            clearCart();
        } catch (error) {
            console.error("Error creating order:", error);
            showNotification("error", "Error creating order");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden, por favor espere...</h1>;
    }

    if (orderId) {
        return <h1>El ID de su compra es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>CHECKOUT</h1>
            <form onSubmit={createOrder}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Crear orden</button>
            </form>
        </div>
    );
};

export default Checkout;