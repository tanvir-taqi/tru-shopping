
import React from 'react';
import './ReviewItem.css';
import { FaTrash } from 'react-icons/fa';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { _id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item '>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(_id)} className='btn-delete'>
                        <FaTrash></FaTrash>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;