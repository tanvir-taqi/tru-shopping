import React from 'react';
import { useQuery } from 'react-query';
import SingleOrder from './SingleOrder';
import Spinner from '../../component/Spinner/Spinner';

const OrderList = () => {
    const { data: orderlist = [], isLoading, refetch } = useQuery({
        queryKey: ['orderlist'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orderlist`)
            const data = await res.json();
            return data
        }

    })

    const handleOrderStatus = (id)=>{
        fetch(`http://localhost:5000/orderlist/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:true})
        })
            .then(res => res.json())
            .then(data => {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
                if (data.acknowledged) {
                    refetch()
                }
            })
    }
    if(isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-full py-12 flex justify-center  items-center'>
            <div className='w-full md:w-3/4'>
                <h1 className='text-center text-xl font-semibold my-12'>All Orders</h1>

                {
                    orderlist.map(order => <SingleOrder
                        key={order._id}
                        order={order}
                        handleOrderStatus={handleOrderStatus}
                    ></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default OrderList;