import React, { useContext } from 'react';
import { useState } from 'react';
import { IoIosCheckmark } from "react-icons/io";
import { ProductContext } from '../../../contextApi/ContextApi';
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const Product = ({item}) => {
    const {addToProduct} = useContext(ProductContext);
    const { icon, features, tagType, price, description, name, period } = item;
    const [isClicked, setIsClicked] = useState(false);
    const handlerButton = () => {
        setIsClicked(true);
        addToProduct(item)
        toast.success(`successfully added ${name} to Card !`)
    };
    return (
        <div className='shadow-xl p-5 rounded-2xl flex-col h-full'>
            <div>
                <div className='flex justify-end'>
                    <h3 className={`w-30 text-center rounded-2xl p-1 ${
                        tagType === 'Best Seller' ? 'bg-amber-200 font-semibold text-amber-800' : 
                        tagType === 'Popular' ? 'bg-purple-200 font-semibold text-purple-500' : 
                        'font-semibold bg-green-200 text-green-500'
                    }`}>{tagType}</h3>
                </div>
                <div className='space-y-5'>
                    <img src={icon} className='size-10 shadow-2xl p-1 border-2 border-gray-300 rounded-3xl' alt="" />
                    <h2 className='font-bold text-4xl'>{name}</h2>
                    <p className='text-2xl text-gray-500'>{description}</p>
                    <p className='font-semibold text-2xl'>${price}/{period}</p>
                    <div>
                        {features.map((feature, id) => (
                            <p key={id} className='text-[15px] flex items-center'>
                                <IoIosCheckmark className='size-8 text-green-500'/>{feature}
                            </p>
                        ))}
                    </div>
                </div>
                <div onClick={handlerButton} className='flex items-center justify-center mt-4'>
                    <button 
                        disabled={isClicked}
                        className={`font-semibold rounded-2xl text-white px-20 text-center  py-2  ${
                        isClicked ? 'bg-green-400 ' : 'bg-[#9514FA]'
                    }`}>{isClicked ? (
                        <span className="flex items-center gap-1">
                            <IoCheckmarkSharp className="size-5" /> Added to Cart!
                        </span>
                    ) : (
                        "Buy Now"
                    )}</button>
                </div>
            </div>
        </div>
        
    );
};




export default Product;