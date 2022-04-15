import React from 'react';
import './Orders.css'
import useProducts from '../../hooks/useProducts';
import UseCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart] = UseCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setProducts(rest);
        removeFromDb(product.id);
    }
    let navigate = useNavigate();
    return (
        <div className='shop-container' >

            <div className="review-iteams-container">
                {
                    cart.map(product => <ReviewIteam
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewIteam>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={() => navigate('/shipment')}>Proceed Shipment</button>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;