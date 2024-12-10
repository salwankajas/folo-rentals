'use client'

import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="relative">
      {/* Blurred shape */}
      {/* Content */}
      <div className="grid md:grid-cols-1 max-w-[400px] m-auto relative">
        <div className="bg-color-primary drop-shadow-xl py-16 px-10 rounded-xl before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
        <div className="p-6 flex flex-col justify-end transition-colors">
          <div className="grow pb-4 mb-4 border-bs border-slate-800">
            <div className="text-base font-medium bg-clip-text text-slate-100 bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Standard Rental</div>
            <div className="mb-1 flex items-center">
              <span className="text-2xl font-medium text-slate-100 mr-1">$</span><span className="text-4xl font-bold text-color-third text-slate-100">{annual ? '30' : '35'}</span><span className="text-lg text-slate-100 font-medium">/day</span>
            </div>
            <div className="text-slate-100">Perfect for short-term needs, this plan offers a reliable bike for your daily commute or delivery work</div>
          </div>
          <div className="pb-4 border-b border-slate-100">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
              Rent Now
            </a>
          </div>
        </div>
        
        {/* Features */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 mt-4 font-bold">Features</div>
        </div>
        
        {/* Daily Maintenance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Daily Maintenance</div>
        </div>
        
        {/* Helmet Included */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Helmet Included</div>
        </div>
        
        {/* 24/7 Roadside Assistance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>24/7 Roadside Assistance</div>
        </div>
        
        {/* GPS Tracking */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>GPS Tracking</div>
        </div>
        
        {/* Flexible Pick-up/Drop-off */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Flexible Pick-up/Drop-off</div>
        </div>
        
        {/* Basic Insurance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Basic Insurance</div>
        </div>
        
        {/* Fuel Efficiency Tracking */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bss border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Fuel Efficiency Tracking</div>
        </div> 
        
        {/* Mobile App Access */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Mobile App Access</div>
        </div> 
        
        {/* Weekly Maintenance Check */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Weekly Maintenance Check</div>
        </div>
        
        {/* 30-Day Rental Discount */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>30-Day Rental Discount</div>
        </div>
        
        {/* Customizable Bike Options */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium"><div className='w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2'><i className="fas fa-check text-color-third"></i></div>Customizable Bike Options</div>
        </div>
        </div>
      </div>
    </div>
  )
}