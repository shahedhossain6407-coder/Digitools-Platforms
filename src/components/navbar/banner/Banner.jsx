import React, { useContext } from 'react';
import image from '../../../asset/banner.png'
import { CiPlay1 } from "react-icons/ci";

import { useNavigate } from 'react-router';
import { ProductContext } from "../../../contextApi/ContextApi";
const Banner = () => {
   const {showProduct} = useContext(ProductContext)
   const navigate = useNavigate();
    return (
       
        <div>
         <div className=' flex gap-30 my-20 items-center container mx-auto'>
           <div className='left space-y-5 flex-1'>
             <div className='badge bg-[#9514FA20]'>
                <div className=' border-5 border-[#9514FA]  rounded-full'></div>
                <h3 className='font-semibold'>New: AI-Powered Tools Available</h3>
             </div>
             <div className='Banner-details space-y-5'>
                <h1 className='font-bold text-6xl'>Supercharge Your <br /> Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />
                   software—all in one place. Start creating faster today. <br />Explore Products
                </p>
             </div>
             <div className='flex gap-4'>
                <button className='btn bg-gradient-to-r from-[#9514FA] to-[#4F39F6] rounded-3xl font-semibold text-white '>Explore Products</button>
                <button className='btn btn-outline border-2 rounded-3xl text-[#9514FA]'> <CiPlay1  className='text-[#9514FA802] size-4' /> Watch Demo</button>
             </div>
           </div>
           <div className='right flex-1'>
             <div className='image'>
              <img src={image} 
               className='w-120'
               alt="" />
             </div>
           </div>
        </div>
          <div className='rating-section bg-[#9514FA] p-20 flex justify-center gap-20 w-screen relative left-1/2 -translate-x-1/2'>
            <div className='space-y-3 text-center'>
               <h1 className='text-5xl font-bold text-white'>50K+</h1>
               <small><h5 className='text-white'>Active Users</h5></small>
            </div>
            <div className='space-y-3 text-center'>
               <h1 className='text-5xl font-bold text-white'>200+</h1>
               <small><h5 className='text-white'>Premium Tools</h5></small>
            </div>
            <div className='space-y-3 text-center'>
               <h1 className='text-5xl font-bold text-white'>4.9</h1>
              <small> <h5 className='text-white'>Rating</h5></small>
            </div>
          </div>
          <div className='text-center space-y-3 my-20'>
             <h3 className='font-bold text-5xl'>Premium Digital Tools</h3>
             <small><p className='text-gray-500 text-[15px] '>Choose from our curated collection of premium digital products 
                designed <br /> to boost your productivity and creativity.</p></small>
                <div className='flex my-5 justify-center'>
               <button onClick={() => navigate('/')} className='rounded-l-4xl btn  px-8  text-white font-bold bg-[#9514FA]'>Products</button>
               <button onClick={() => navigate('/showProduct')} className=' rounded-r-4xl btn  px-8 font-bold border'>Cart({showProduct.length})</button>
               </div>
            </div>
        </div>
    );
};

export default Banner;