import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../utilities/utilities';

import ReviewItem from '../../component/ReviewItem/ReviewItem';
import Cart from '../../component/Cart/Cart';

const Orders = () => {

    const [cartItems, setCartItems] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddsress] = useState('')

    // get data from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        if (storedCart.length > 0) {
            setCartItems(storedCart);

        } else {
            setCartItems([])

        }
    }, [])

    // cart items remove
    const handleRemoveItem = (id) => {
        const remaining = cartItems.filter(product => product._id !== id);
        setCartItems(remaining);
        removeFromDb(id);
    }

    // total cart remove
    const clearCart = () =>{
        setCartItems([]);
        deleteShoppingCart();
    }


    // send orders to the database
    const handleOrders = () =>{
        const currentDate = new Date().toISOString();
        const order = {
            name,
            phone,
            address,
            product:cartItems,
            status:false,
            date:currentDate
        }
        fetch('https://tru-shopper-server.vercel.app/orders',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
       ;
            if(data.acknowledged){

                clearCart()
                setName('')
                setPhone('')
                setAddsress('')
            }
        })
        .catch(err =>{
            console.log('====================================');
            console.error(err);
            console.log('====================================');
        })
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    })

    return (
        <div className='min-h-screen'>
            <div className=''>
                {
                    cartItems.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cartItems.length === 0 && <h2 className='m-6'>No Items for Review. Please <Link to="/shop" className='font-bold underline'>Shop more</Link></h2>
                }
            </div>
            <div className='w-full flex justify-center py-12'>
                {
                    cartItems.length > 0 && <div className='flex flex-col w-full md:w-1/3 p-6 border border-[#0a0c1b] '>
                        <h1>Fill the form for a <strong>Cash On Delivery </strong>service and confirm your order</h1>
                        <input onChange={(event)=>setName(event.target.value)} required type="text" name='name' placeholder='Your Name' className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full my-2 border-t-4 border-b-4 border-l-4 border-r-none border-[#0a0c1b]  focus:border-r-4" />
                        <input onChange={(event)=>setPhone(event.target.value)} required type="text" name='phone' placeholder='Your Phone Number' className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full my-2 border-t-4 border-b-4 border-l-4 border-r-none border-[#0a0c1b]  focus:border-r-4" />
                        <input onChange={(event)=>setAddsress(event.target.value)} required type="text" name='address' placeholder='Your Address' className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full my-2 border-t-4 border-b-4 border-l-4 border-r-none border-[#0a0c1b]  focus:border-r-4" />
                        <button onClick={handleOrders} className='bg-[#0a0c1bfd] w-1/2 text-white font-bold py-1 px-3 rounded-lg hover:shadow-orange-600 hover:shadow-inner'>Confirm Order</button>
                    </div>
                }
            </div>
            <div className='cart-container '>
                <Cart clearCart={clearCart} cart={cartItems}>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Orders;