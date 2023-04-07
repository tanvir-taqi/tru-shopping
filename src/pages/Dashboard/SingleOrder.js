import React from 'react';

const SingleOrder = ({ order,handleOrderStatus }) => {
    

    const { name, address, phone, product ,_id,status} = order
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center border border-[#fd6a53fe] p-4 '>
                <div>
                    <h1>Address: <span className='font-medium'> {address}</span></h1>
                </div>
                <div>
                    <h1>Name:<span className='font-medium'> {name}</span></h1>
                    <h1>Phone:<span className='font-medium'> {phone}</span></h1>
                </div>
                <div>
                    {
                        product.map(pr => <h1 key={pr._id}><span className='font-medium'>{pr?.name}</span> : {pr?.quantity}</h1>)
                    }
                </div>
                <div>
                    {
                        status ? <div><h2>Order sent successfully</h2></div> : <button onClick={()=>handleOrderStatus(_id)} className='py-1 px-4 bg-[#fd6a53fe] text-white duration-700 hover:rounded-3xl'>Product Shipped</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;