import React from 'react';
import { RiAccountCircleLine } from "react-icons/ri";
import { LiaUserSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { PiTarget } from "react-icons/pi";
import PricingSection from '../pricingSection/PricingSection';
const StartPlan = () => {
    return (
        <div className='my-20'>
            <div className='headline space-y-2'>
            <h3 className='text-center font-bold text-4xl'>Get Started in 3 Steps</h3>
            <small><p className='text-center text-gray-500 text-[13px]'>Start using premium digital tools in minutes, not hours.</p></small>
            </div>
            <div className='planing-card-container grid grid-cols-3 gap-30 mt-30 container mx-auto'>
                <div className='planing-card shadow rounded-2xl p-5 '>
                    <div className='flex justify-end items-center '>
                    <h3 className=' w-7 h-7 bg-purple-600 rounded-full text-white text-center text-sm pt-1'>01</h3>
                    </div>
                   <div className='py-20'>
                   <div className='flex justify-center'>
                    <LiaUserSolid className='size-15 bg-purple-100 text-purple-500 rounded-full' />
                    </div>
                    <div className='details text-center space-y-2 mt-3'>
                      <h3 className='text-2xl font-bold'>Create Account</h3>
                      <p className='text-sm text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                   </div>
                </div>
                <div className='planing-card shadow rounded-2xl p-5'>
                    <div className='flex justify-end items-center '>
                    <h3 className=' w-7 h-7 bg-purple-600 rounded-full text-white text-center text-sm pt-1'>02</h3>
                    </div>
                   <div className='py-20'>
                   <div className='flex justify-center '>
                 
                   <AiOutlineProduct className='rounded-full p-3 size-15 bg-purple-100 text-purple-500 '/>
                    </div>
                    <div className='details text-center space-y-2 mt-3'>
                      <h3 className='text-2xl font-bold'>Choose Products</h3>
                      <p className='text-sm text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                   </div>
                </div>
                <div className='planing-card shadow rounded-2xl p-5'>
                    <div className='flex justify-end items-center '>
                    <h3 className=' w-7 h-7 bg-purple-600 rounded-full text-white text-center text-sm pt-1'>03</h3>
                    </div>
                   <div className='py-20'>
                   <div className='flex justify-center '>
                   <PiTarget className='size-15 bg-purple-100 p-3 text-purple-500 rounded-full'   />
                    </div>
                    <div className='details text-center space-y-2 mt-3 '>
                      <h3 className='text-2xl font-bold'>Start Creating</h3>
                      <p className='text-sm text-gray-500'>Download and start using your premium tools immediately.</p>
                    </div>
                   </div>
                </div>
                
            </div>
            <PricingSection></PricingSection>
        </div>
    );
};

export default StartPlan;