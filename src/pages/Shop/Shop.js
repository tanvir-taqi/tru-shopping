import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../component/Product/Product';
import ProductDetails from '../../component/Product/ProductDetails';


const Shop = ({limit}) => {
    const [products, setProducts] = useState([])
    const [viewDetails, setViewDetails] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const handleDetails  = (id, viewStatus) =>{
        if(viewStatus){
            
            setViewDetails(true)
            fetch(`http://localhost:5000/products/${id}`)
            .then(response =>response.json())
            .then(data =>{
                setSingleProduct(data)
            })
        }
    }

    const handleAddToCart =(product) =>{
        console.log('====================================');
        console.log(product);
        console.log('====================================');
    }

    return (
        <div className='w-full flex justify-center items-center py-12 '>
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center '>

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDetails={handleDetails}
                    ></Product>)
                }
            </div>
            {
                viewDetails && <ProductDetails 
                singleProduct={singleProduct} 
                setViewDetails={setViewDetails}
                handleAddToCart={handleAddToCart}
                
                ></ProductDetails>
            }
        </div>
    );
};

export default Shop;