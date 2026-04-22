import React, { useContext } from 'react';
import { ProductContext } from "../../../contextApi/ContextApi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router';

const ShowProduct = () => {
    const navigate = useNavigate();
    const { showProduct ,removeCart,removeAllCard} = useContext(ProductContext);
    const totalPrice = showProduct.reduce((total, item) => {
        return total + item.price;
    }, 0);
   
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
            
            <div className='flex  my-5 justify-center'>
                <button onClick={() => navigate('/')} className='btn rounded-l-4xl px-8 font-bold border border-[#9514FA]'>Products</button>
                <button onClick={() => navigate('/showProduct')} className='btn rounded-r-4xl px-8 text-white font-bold bg-[#9514FA]'>Cart({showProduct.length})</button>
            </div>
            
            {showProduct.length === 0 ? (
                <div className="text-center py-20 text-gray-500 text-xl">
                    <div className='flex items-center justify-center text-center'>
                        <FiShoppingCart className='size-15 mb-3 text-gray-500' />
                    </div>
                    <h3 className='text-gray-500'>Your cart is empty</h3>
                </div>
            ) : (
                <>
                    <div>
                        {showProduct.map((item, index) => (
                            <div key={index} className="flex mb-5 justify-between items-center p-5 rounded-2xl bg-gray-200">
                                <div className='flex items-center gap-5'>
                                    <div className='img'>
                                        <img src={item.icon} className='w-10' alt="" />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold'>{item.name}</h3>
                                        <h1 className='text-gray-500'>${item.price}</h1>
                                    </div>
                                </div>
                                <div>
                                    <h3 onClick={() => removeCart(index)} className='flex justify-end text-right text-red-500 font-semibold cursor-pointer'>remove</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between mt-5 border-t pt-5'>
                        <h3 className='text-gray-500'>Total</h3>
                        <p className='font-bold'>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='mt-5'>
                        <button onClick={removeAllCard} className='btn rounded-xl w-full text-white font-semibold bg-[#9514FA] '>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShowProduct;