import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";

const PricingSection = () => {
    return (
       <div className='container mx-auto mt-30 '>
         <div className='headline text-center space-y-3'>
            <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
            <p className='text-sm text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='Price-card-container grid grid-cols-3 gap-20 mt-30  '>
              <div className='price-card bg-gray-100 space-y-5 p-10 rounded-xl'>
                <div className='space-y-1'>
                    <h3 className='font-bold text-xl'>Starter</h3>
                    <p className='text-sm '>Perfect for getting started</p>
                </div>
                <div>
                    <h3><span className='font-bold text-3xl'>$0</span><span className='text-gray-500'>/Month</span></h3>
                </div>
                <div className='description space-y-1 font-semibold'>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Access to 10 free tools</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Basic templates</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Community support</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>1 project per month</h3>
                    </div>
                </div>
                <div className=' mt-30 flex justify-center'>
                <button className=' bg-gradient-to-r from-[#9514FA] to-[#4F39F6] w-full rounded-3xl text-white py-2 px-10 font-semibold'>Get Started Free</button>
                </div>
              </div>
              
              <div className='price-card relative bg-gradient-to-r from-[#9514FA] to-[#4F39F6] space-y-5 p-10 rounded-xl'>
                <div className='absolute -top-5 right-30 ' >
                    <h3 className='bg-yellow-50 p-1 rounded-2xl px-5 font-bold text-[#BB4D00]'>Most Popular</h3>
                </div>
                <div className='space-y-1'>
                    <h3 className='font-bold text-xl text-white'>Pro</h3>
                    <p className='text-sm  text-gray-100 '>Best for professionals</p>
                </div>
                <div>
                    <h3><span className='font-bold text-3xl text-white'>$29</span><span className='text-gray-100'>/Month</span></h3>
                </div>
                <div className='description space-y-1 font-semibold'>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Access to all premium tools</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Unlimited templates</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Priority support</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Unlimited projects</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Cloud sync</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-white' />
                        <h3 className='text-sm text-white'>Advanced analytics</h3>
                    </div>
                </div>
                <div className=' mt-30 flex justify-center'>
                <button className='bg-white  w-full rounded-3xl font-semibold py-2 bg-white px-10'>Start Pro Trial</button>
                </div>
              </div>
              <div className='price-card bg-gray-100 space-y-5 p-10 rounded-xl'>
                <div className='space-y-1'>
                    <h3 className='font-bold text-xl'>Enterprise</h3>
                    <p className='text-sm '>For teams and businesses</p>
                </div>
                <div>
                    <h3><span className='font-bold text-3xl'>$99</span><span className='text-gray-500'>/Month</span></h3>
                </div>
                <div className='description space-y-1 font-semibold'>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Everything in Pro</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Team collaboration</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Custom integrations</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Dedicated support</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>SLA guarantee</h3>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoCheckmarkSharp className='text-green-500' />
                        <h3 className='text-sm'>Custom branding</h3>
                    </div>
                </div>
                <div className=' mt-30 flex justify-center'>
                <button className=' bg-gradient-to-r from-[#9514FA] to-[#4F39F6] w-full rounded-3xl text-white py-2 px-10 font-semibold'>Contact Sales</button>
                </div>
              </div>
        </div>
       </div>
    );
};

export default PricingSection;