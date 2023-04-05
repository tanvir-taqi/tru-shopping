import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../../assets/home-img.png'

const HomeBanner = () => {
    return (
        <div>
               <div className="bg-[#0a0c1bfd] text-white md:mx-auto md:px-16 p-2  mb-10  grid grid-cols-1 md:grid-cols-2 items-center gap-6" >
                <div >

                <h1 className='text-2xl font-extrabold'>Shop the Latest Fashion Trends at   <span className='font-bold flex text-[#fd6a53]  text-3xl md:text-5xl'><h1 className=' title-navbar'>TruShopping</h1></span></h1>
                <p className='text-base mb-4 font-semibold my-4'>TruShopping is your go-to online fashion store for the latest trends in clothing. Our collection includes a wide range of stylish outfits for men and women, from casual wear to formal attire. Whether you're looking for chic dresses, comfortable tops, trendy bottoms, or stylish accessories, we've got you covered. We believe that fashion should be accessible to everyone, which is why we offer high-quality products at affordable prices. Our user-friendly website makes shopping easy and enjoyable, with hassle-free payment and delivery options. Shop now and experience the true essence of fashion with Tru Shopping.</p>
                </div>
                <div className='w-full'>
                        <img className='w-full rounded-lg' src={HomeImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;