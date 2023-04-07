import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../component/Spinner/Spinner';
import MySingleProducts from './MySingleProducts';

const MyProducts = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`)
            const data = await res.json();
            return data
        }

    })


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='flex justify-center w-full'>
            <div className='w-full md:w-3/4'>
                <h1 className='py-12 text-3xl font-bold'>All Products</h1>
                {
                    products.map(product => <MySingleProducts key={product._id} product={product}></MySingleProducts>)
                }
            </div>

        </div>
    );
};

export default MyProducts;