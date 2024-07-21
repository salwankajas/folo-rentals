'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-1 w-[400px] m-auto relative">
        <div className="before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
        {/* Pricing toggle */}
        
        {/* Standard Rental price */}
        <div className="p-6 flex flex-col justify-end transition-colors">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Standard Rental</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '30' : '35'}</span><span className="text-sm text-slate-600 font-medium">/day</span>
            </div>
            <div className="text-slate-500">Perfect for short-term needs, this plan offers a reliable bike for your daily commute or delivery work</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
              Rent Now
            </a>
          </div>
        </div>
        
        {/* Features */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
        </div>
        
        {/* Daily Maintenance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Daily Maintenance</div>
        </div>
        
        {/* Helmet Included */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Helmet Included</div>
        </div>
        
        {/* 24/7 Roadside Assistance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">24/7 Roadside Assistance</div>
        </div>
        
        {/* GPS Tracking */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">GPS Tracking</div>
        </div>
        
        {/* Flexible Pick-up/Drop-off */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Flexible Pick-up/Drop-off</div>
        </div>
        
        {/* Basic Insurance */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Basic Insurance</div>
        </div>
        
        {/* Fuel Efficiency Tracking */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Fuel Efficiency Tracking</div>
        </div> 
        
        {/* Mobile App Access */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Mobile App Access</div>
        </div> 
        
        {/* Weekly Maintenance Check */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Weekly Maintenance Check</div>
        </div>
        
        {/* 30-Day Rental Discount */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">30-Day Rental Discount</div>
        </div>
        
        {/* Customizable Bike Options */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Customizable Bike Options</div>
        </div>
        </div>
      </div>
    </div>
  )
}