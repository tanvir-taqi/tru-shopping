import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import Spinner from '../../component/Spinner/Spinner';

const AddProducts = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const navigate = useNavigate();
    const [productAddLoading, setProductAddLoading] = useState(false)

    const imagebbKey = process.env.REACT_APP_image_key

    const handleAddProduct = (data) => {
        
        setProductAddLoading(true)
       
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const productPhoto = imgData.data.url
               
                const product = {
                    name: data.product,
                   img: productPhoto,
                   seller:data.name,
                   category:data.category,
                   price:data.price,
                   stock:data.stock,
                   shipping:data.shipping,
                   quantity:0,
                   ratings:data.ratings,
                   ratingsCount:data.ratingsCount,
                }
                addProductToDB(product);
            })
            .catch(err => console.log(err))
    }


    const addProductToDB = (product) => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    reset()
                    navigate('/dashboard/myproducts')
                    setProductAddLoading(false)
                }
              
            })
    }

    if ( productAddLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
             <div className=" py-20 w-full  flex justify-center">
         
         <div className='p-10 bg-[#0a0c1bfd] text-white'>
             <h1 className="text-center font-bold text-2xl my-4">Add A Product</h1>

             <form onSubmit={handleSubmit(handleAddProduct)} >
                 <div className="grid grid-cols-1 md:grid-cols-2 justify-start gap-6">
                     <div className="form-control w-full max-w-xs flex flex-col">
                         <label className="label"> <span className="label-text">Seller Name</span></label>
                         <input type="text"  {...register("name", {
                             required: "Name is Required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                     </div>



                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Product Name</span></label>
                         <input type="text"  {...register("product", {
                             required: "Name is Required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.product && <p className='text-red-500'>{errors.product.message}</p>}
                     </div>


                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Product Image</span></label>
                         <input type="file" {...register("img", {
                             required: "Image is Required"
                         })} className=" file-input file-input-bordered  file-input-info w-full max-w-xs" />
                         {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                     </div>


                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Category</span></label>
                         <input type="text" {...register("category", {
                             required: "category is Required"
                         })} className=" p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                     </div>




                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Price <small>in $</small></span></label>
                         <input type="text" {...register("price", {
                             required: "Price is required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                     </div>



                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Stock</span></label>
                         <input type="text" {...register("stock", {
                             required: "Stock is required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.stock && <p className='text-red-500'>{errors.stock.message}</p>}
                     </div>



                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Shipping</span></label>
                         <input type="text" {...register("shipping", {
                             required: "shipping is required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.shipping && <p className='text-red-500'>{errors.shipping.message}</p>}
                     </div>



                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Ratings</span></label>
                         <input type="text" {...register("ratings", {
                             required: "ratings is required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.ratings && <p className='text-red-500'>{errors.ratings.message}</p>}
                     </div>

                     <div className="form-control w-full max-w-xs  flex flex-col">
                         <label className="label"> <span className="label-text">Ratings Count</span></label>
                         <input type="text" {...register("ratingsCount", {
                             required: "ratings is required"
                         })} className="p-2 text-black outline-none duration-500 w-2/3 focus:w-full" />
                         {errors.ratingsCount && <p className='text-red-500'>{errors.ratingsCount.message}</p>}
                     </div>



                 </div>
                 <input className='text-black font-bold text-lg bg-[#fd6a53] py-2 px-4 duration-700 hover:rounded-3xl my-3 cursor-pointer' value="Add Product" type="submit" />
             </form>
         </div>

     </div>
        </div>
    );
};

export default AddProducts;