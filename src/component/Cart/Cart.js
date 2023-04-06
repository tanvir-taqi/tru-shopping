import React from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ cart, clearCart,children}) => {

    let shipping = 0;
    let quantity = 0;
    let total = 0;
    if (cart.length > 0) {
        for (let product of cart) {
            quantity = quantity + product.quantity;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
        }
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div>
            {
                cart.length > 0 ? <div className='cart bg-[#fd6a53]'>
                    <h4 className='text-xl font-bold'>Order Summary</h4>
                    <p className='text-lg my-2 font-medium'>Selected Items: {quantity}</p>
                    <p className='text-lg my-2 font-medium'>Total price: ${total}</p>
                    <p className='text-lg my-2 font-medium'>Total Shipping: ${shipping}</p>
                    <p className='text-lg my-2 font-medium'>Tax: {tax}</p>
                    <h5 className='text-xl font-bold text-[#0a0c1b]'>Grand Total: {grandTotal.toFixed(2)}</h5>
                   {children}
                    <button onClick={clearCart} className='bg-[#0a0c1b] my-4 flex items-center justify-center w-[220px]'>Clear Cart <span className='ml-4'><FaTrash></FaTrash></span></button>
                    
                </div>
                : <div className='w-full h-full flex justify-center items-center'><h4 className='text-xl font-bold'>Cart is empty</h4></div>
            }

        </div>
    );
};

export default Cart;