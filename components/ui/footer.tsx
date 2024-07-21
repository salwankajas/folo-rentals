import Logo from './logo'
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="text-sm text-slate-300">© folo rentals - All rights reserved.</div>
            <div className="text-sm text-slate-300">
              <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="privacy-policy">Privacy Policy</a> | 
              <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="terms-conditions">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  )
}
