import React, { useContext } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import Banner from './banner/Banner';
import { ProductContext } from '../../contextApi/ContextApi';
const Navber = () => {
  const { showProduct } = useContext(ProductContext);
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    </div>
    <a className="btn btn-ghost  bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent font-bold text-2xl">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-3 list-none font-semibold">
    <li>Products</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Testimonials</li>
    <li>FAQ</li>
    
    <ul className="menu menu-horizontal px-1">
    </ul>
  </div>
    <div className="navbar-end flex gap-5 font-semibold">
    <div className="relative inline-block">
    <FiShoppingCart size={24} /> 
    {showProduct.length > 0 && (
        <div className="absolute -top-4 -right-2 w-5 h-5 text-xs text-center items-center  bg-red-500 text-white flex justify-center rounded-full ">
            {showProduct.length}
        </div >
    )}
</div>
    
    <h3 >Login</h3>
    <a className="btn btn-primary rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">Get Started</a>
  </div>
</div>
<Banner></Banner>
        </div>
    );
};

export default Navber;