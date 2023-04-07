import React from 'react';

const MySingleProducts = ({product}) => {
    const { name, seller, price,img,stock } = product;
    return (
        <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 my-4 border border-[#fd6a53] ">
      <div className="flex items-center justify-center">
        <img src={img} alt={name} className="h-24 w-24 object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-medium mb-2">{name}</h2>
        <h2 className="text-xl font-medium mb-2">Seller:{seller}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-gray-600 mb-2">Stock: {stock}</p>
        <div className="flex">
          <input
            type="number"
            min="0"
            max="999"
            
            className="w-16 py-1 px-2 border border-gray-400 mr-2"
          />
          <button  className="bg-green-500 text-white py-1 px-2 rounded">
            Update
          </button>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end md:justify-center">
        <button  className="bg-red-500 text-white py-1 px-2 rounded">
          Delete
        </button>
      </div>
    </div>

        </div>
    );
};

export default MySingleProducts;