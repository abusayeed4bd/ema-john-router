import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewIteam.css'

const ReviewIteam = (props) => {
    const { handleRemoveProduct, product } = props;
    const { name, img, price, shipping, quantity } = props.product;
    return (
        <div className='review-iteam'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-iteam-details-container">
                <div className="review-iteam-detail">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className="orange-color" >${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewIteam;