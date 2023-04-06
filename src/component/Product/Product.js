import React from 'react';

import './Product.css';
import { FaCartPlus } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Product = ({ product, handleDetails }) => {

    const { name, img, seller, price, ratings,_id } = product;

    return (
        <div className='product'>
            <div>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FaCartPlus></FaCartPlus>
            </button> */}
            <button onClick={() => handleDetails(_id,true)} className='btn-cart'>
                <p className='btn-text'>View Details</p>
                
            </button>
        </div>
    );
};

export default Product;