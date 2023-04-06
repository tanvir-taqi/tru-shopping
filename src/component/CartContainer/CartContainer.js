import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, getStoredCart } from '../../utilities/utilities';
import { FaTimes } from 'react-icons/fa';

const CartContainer = ({setShowCartContainer,setCartNotification}) => {

    const [cart, setCart] = useState([]);
    const clearCart = () =>{
        setCart([])
        setCartNotification(false)
        deleteShoppingCart();
    }

    useEffect( () =>{
        const storedCart = getStoredCart();
        if(storedCart.length > 0){
            setCart(storedCart);
            setCartNotification(true)
        }else{
            setCart([])
            setCartNotification(true)
        }
       
    }, [setCartNotification])
    return (
        <div>
             <div className="w-full md:w-1/4 h-screen bg-[#f87e6b] fixed right-0 top-0 z-[999]">
             <button className='absolute right-6 top-6 text-4xl cursor-pointer z-[999] border-4 border-transparent rounded-full duration-1000 hover:animate-spin hover:border-black  ' onClick={()=>setShowCartContainer(false)}><FaTimes></FaTimes></button>
                {
                    cart.length > 0 ?<Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders" className='bg-[#0a0c1b] my-6 flex items-center justify-center w-[220px]'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
                : <div className='w-full h-full flex justify-center items-center'><h4 className='text-xl font-bold'>Cart is empty <strong><Link to='/shop'>Shop Now</Link></strong></h4></div>
                }
                
            </div>
        </div>
    );
};

export default CartContainer;