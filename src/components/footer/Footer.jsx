import React from 'react';

const Footer = () => {
    return (
        <div className=' space-y-5 bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-center p-30'>
            <div className='space-y-3 '>
                <h3 className='text-white font-bold text-2xl'>Ready to Transform Your Workflow?</h3>
                <p className='text-gray-200 text-sm'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <button className='bg-white px-10 p-2 rounded-3xl'>Explore Products</button>
                <button className='border p-2 px-10 text-white rounded-3xl'>View Pricing</button>
            </div>
            <div><p className='text-gray-200 text-sm'>14-day free trial • No credit card required • Cancel anytime</p></div>
        </div>
    );
};

export default Footer;