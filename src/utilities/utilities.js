// use local storage to manage cart data
const addToLocalDb = product =>{
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    const checkProduct = shoppingCart.find(prd => prd._id === product._id)
    if(checkProduct){
        checkProduct.quantity = parseInt(checkProduct.quantity) + 1
        
    }
    else {
        product.quantity = parseInt(product.quantity) + 1
        shoppingCart.push(product)
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
  
    getStoredCart,
    removeFromDb,
    deleteShoppingCart,
    addToLocalDb
}