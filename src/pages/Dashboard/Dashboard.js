import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../component/Spinner/Spinner';
import './Dashboard.css'

const Dashboard = () => {
    const [products,setProducts] = useState([])
    const [orders,setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    //get all products
    useEffect(()=>{
        axios.get(`https://tru-shopper-server.vercel.app/products`)
            .then(response => {
                setIsLoading(false)
                setProducts(response.data);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error);
            });
    },[])

    // get all orders
    useEffect(()=>{
        axios.get(`https://tru-shopper-server.vercel.app/orderlist`)
            .then(response => {
                setIsLoading(false)
                setOrders(response.data);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error);
            });
    },[])

    // orders which are already completed by admin
    const completedOrders = orders.filter(order => order.status === true)

    // total stock
    let count = 0
    for(let i = 0; i < products.length; i++){
        count +=  parseInt( products[i].stock)
    }


    // total earning from completed orders
    const totalPrice = completedOrders.reduce((acc, curr) => {
        return acc + curr.product.reduce((productAcc, productCurr) => {
          return productAcc + productCurr.price;
        }, 0);
      }, 0); 

    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='py-32'>
            <h1 className='text-center font-extrabold text-4xl'>Welcome to Dashboard</h1>
            <p className="text-center">
                The True Shopper dashboard is your go-to hub for managing your account, viewing your order history, and tracking your shipments. With an easy-to-use interface and real-time updates, you can stay on top of your purchases and never miss a beat. Plus, our dedicated customer support team is always available to answer any questions you may have.
            </p>
            <p className="text-center">
                True Shopper is an e-commerce platform that offers a wide range of fashion items, including dresses, accessories, and more. Our mission is to provide high-quality products that make our customers look and feel their best, while also providing a seamless shopping experience. With a user-friendly dashboard and reliable customer support, shopping with True Shopper is easy, enjoyable, and hassle-free.
            </p>

            <div>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-16">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-4xl font-bold mb-4">{products?.length}</h2>
                        <h2 className="text-gray-600">Total Products</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-4xl font-bold mb-4">{count}</h2>
                        <h2 className="text-gray-600">Total Stock</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-4xl font-bold mb-4">{orders?.length}</h2>
                        <h2 className="text-gray-600">Total Orders</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-4xl font-bold mb-4">{completedOrders?.length}</h2>
                        <h2 className="text-gray-600">Completed Orders</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 buring">
                        <h2 className="text-4xl font-bold mb-4">{totalPrice}</h2>
                        <h2 className="text-gray-600">Total Earning</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;