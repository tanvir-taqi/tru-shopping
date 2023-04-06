import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import CartContainer from '../CartContainer/CartContainer';

const CartIcon = () => {
    const [showCartContainer, setShowCartContainer] = useState(false)
    const [cartNotification,setCartNotification] = useState(false)
    
    
    return (
        <div className=''>
            <div className='fixed bottom-6 right-6'>
            <div onClick={()=>setShowCartContainer(true)} className={` w-12 h-12 bg-[#fd6a53] flex items-center justify-center text-2xl text-[#0a0c1b] rounded-full cursor-pointer duration-700 hover:-translate-y-2 ${cartNotification ?'animate-bounce':'animate-none'}`} >
                <div className={`${cartNotification ?'block':'hidden'} absolute -top-1 left-1 w-3 h-3 bg-red-800 rounded-full`}></div>
                <FaCartPlus></FaCartPlus>
            </div>
            </div>
            {
                showCartContainer ? <CartContainer 
                setShowCartContainer={setShowCartContainer}
                setCartNotification={setCartNotification}
                ></CartContainer> : ''
            }
        </div>
    );
};

export default CartIcon;