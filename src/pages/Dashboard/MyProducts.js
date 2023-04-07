import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../component/Spinner/Spinner';
import MySingleProducts from './MySingleProducts';

const MyProducts = () => {

    const [updatedValue, setUpdatedValue] = useState('')
    const [confirmModal, setConfirmMdal] = useState(false)
    const [deleteID, setDeleteID] = useState('')

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`)
            const data = await res.json();
            return data
        }

    })

    const handleStockUpdate = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ stock: updatedValue })
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    refetch()
                    setUpdatedValue("")
                }
            })
    }

    //get ready for modal
    const handleDeleteProductID = id => {
        setDeleteID(id)
        setConfirmMdal(true)
    }


    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${deleteID}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    setConfirmMdal(false)
                    setDeleteID('')
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='flex justify-center w-full'>
            <div className='w-full md:w-3/4'>
                <h1 className='py-12 text-3xl font-bold'>All Products</h1>
                {
                    products.map(product => <MySingleProducts
                        key={product._id}
                        product={product}
                        handleStockUpdate={handleStockUpdate}
                        handleDeleteProduct={handleDeleteProductID}
                        setUpdatedValue={setUpdatedValue}

                    ></MySingleProducts>)
                }
                {
                    confirmModal &&   <div className='fixed top-0 right-0 z-50  bg-[#071b3fbb] text-white text-lg font-medium w-full h-screen flex justify-center items-center'>
                    <div className='flex flex-col items-center p-10 bg-[#071b3f] w-[300px] rounded-xl'>
                        <h1>Are You Sure?</h1>
                        <div className='flex justify-around items-center w-full '>
                            <button className='cursor-pointer' onClick={handleDelete}>Yes</button>
                            <button className='cursor-pointer' onClick={() => setConfirmMdal(false)}>No</button>
                        </div>
                    </div>
                </div>
                }

              
            </div>

        </div>
    );
};

export default MyProducts;