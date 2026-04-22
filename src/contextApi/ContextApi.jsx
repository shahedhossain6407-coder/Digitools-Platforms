import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const ProductContext = createContext()
const ContextApi = ({children}) => {
    const [showProduct,setShowProduct]=useState([]);
    const addToProduct = (product) =>{
        setShowProduct((prevCart) => [...prevCart, product]);
    }
    const removeCart = (remove) => {
        setShowProduct((prevCart) => prevCart.filter(( item,index) => index !== remove));
        toast.error(`This item is Remove !`)
   };
   const removeAllCard = () =>{
    setShowProduct([]);
    toast.success("Checkout successful! Thank you for your purchase.")
   }

    return (
        <div>
            <ProductContext.Provider value={{showProduct,addToProduct,removeCart,removeAllCard}}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ContextApi;