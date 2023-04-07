import React from 'react';

import './Product.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';

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
                <p ><small className='flex items-center space-x-1 justify-start'> <span>Ratings: {ratings}</span>  <span> <FaStar></FaStar></span> </small></p>
            </div>
            
            <button onClick={() => handleDetails(_id,true)} className='btn-cart'>
                <p className='btn-text'>View Details</p>

            </button>
        </div>
    );
};

export default Product;