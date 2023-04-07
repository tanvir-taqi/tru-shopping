import React from 'react';
import { FaCartPlus, FaStar, FaTimes } from 'react-icons/fa';

const ProductDetails = ({ singleProduct, handleAddToCart,setViewDetails }) => {
    const { name, img, seller, price, ratings, } = singleProduct;
    return (
        <div className='fixed top-0 z-[999] w-full h-screen md:p-16 p-4 bg-[#f7f7f7]'>
            <button className='absolute right-6 top-6 text-2xl' onClick={()=>setViewDetails(false)}><FaTimes></FaTimes></button>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
                <div>
                    <img src={img} alt="" className='img-fluid h-full w-full' />
                </div>
                <div className='flex flex-col md:space-y-6 space-y-2'>
                    <p className='text-3xl font-bold'>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p ><small className='flex items-center space-x-1 justify-start'> <span>Ratings: {ratings}</span>  <span> <FaStar></FaStar></span> </small></p>
                    <button onClick={() => handleAddToCart(singleProduct)} className='bg-[#fd6a538f] w-2/3 flex justify-center items-center duration-700 hover:rounded-xl hover:flex-row-reverse hover:bg-[#fd6a53] hover:scale-105 py-1 font-bold'>
                        <p className='px-4'>Add to Cart</p>
                        <FaCartPlus></FaCartPlus>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;