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
        
        {/* Pro price */}
        <div className="p-6  flex flex-col justify-end transition-colors">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Retail</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '120' : '150'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
            </div>
            <div className="text-slate-500">Perfect for bars and micro-producers, this plan enhances customer experience and streamlines operations</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
              Contact Now
            </a>
          </div>
        </div>
        {/* Team price */}
       
        {/* Enterprise price */}
        
        {/* # Features */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
        </div>
        
        {/* Dashboard Access */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Dashboard Access</div>
        </div>
        
        {/* Supplier Information */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Supplier Information</div>
        </div>
        
        {/* Customer Management */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Customer Management</div>
        </div>
        
        {/* Compliance Tracking */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Compliance Tracking</div>
        </div>
        
        {/* Advanced Supplier Management */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Advanced Supplier Management</div>
        </div>
        {/* Production Overview */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Production Overview</div>
        </div>
        {/* Enhanced Customer Management */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Enhanced Customer Management</div>
        </div> 
        {/* Marketing Analytics */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Marketing Analytics</div>
        </div> 
        {/* Exclusive Route Optimization */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Exclusive Route Optimization</div>
        </div>
        {/* Extended Dashboard */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Extended Dashboard</div>
        </div>
        {/* Full Data Access */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Full Data Access</div>
        </div>
        </div>
      </div>
    </div>
  )
}