import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../component/Product/Product';
import ProductDetails from '../../component/Product/ProductDetails';
import { addToLocalDb } from '../../utilities/utilities';
import CartIcon from '../../component/CartIcon/CartIcon';
import Spinner from '../../component/Spinner/Spinner';


const Shop = ({limit,children}) => {
    const [products, setProducts] = useState([])
    const [viewDetails, setViewDetails] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false);


    // load products depending on limit
    useEffect(() => {
        setIsLoading(true)
        if(limit){
            axios.get(`https://tru-shopper-server.vercel.app/products?limit=${limit}`)
            .then(response => {
                setIsLoading(false)
                setProducts(response.data);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error);
            });
        }else{
            axios.get(`https://tru-shopper-server.vercel.app/products`)
            .then(response => {
                setIsLoading(false)
                setProducts(response.data);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error);
            });
        }
       
    }, [limit])

    // handle product details function 
    const handleDetails  = (id, viewStatus) =>{
        if(viewStatus){
            
            setViewDetails(true)
            fetch(`https://tru-shopper-server.vercel.app/products/${id}`)
            .then(response =>response.json())
            .then(data =>{
                setSingleProduct(data)
            })
        }
    }

    // handle add to cart function
    const handleAddToCart =(selectedProduct) =>{
        addToLocalDb(selectedProduct)
        setViewDetails(false)
    }

    if(isLoading){
        return <Spinner></Spinner>
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
                {children }
                <CartIcon></CartIcon>
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