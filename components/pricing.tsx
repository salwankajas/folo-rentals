'use client'

import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { features } from 'process';
import { element } from 'prop-types';
export default function Pricing(props: { "planName": string, "price": number, "duration": string, "des": string, "features": string[] }) {

  return (
    <div className="relative">
      {/* Blurred shape */}
      {/* Content */}
      <div className="grid md:grid-cols-1 max-w-[400px] m-auto relative">
        <div className="bg-color-primary drop-shadow-xl py-16 px-10 rounded-xl before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
          <div className="p-6 flex flex-col justify-end transition-colors">
            <div className="grow pb-4 mb-4 border-bs border-slate-800">
              <div className="text-base font-medium bg-clip-text text-slate-100 bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">{props.planName}</div>
              <div className="mb-1 flex items-center">
                <span className="text-2xl font-medium text-slate-100 mr-1">€</span><span className="text-4xl font-bold text-color-third text-slate-100">{props.price}</span><span className="text-lg text-slate-100 font-medium">/{props.duration}</span>
              </div>
              <div className="text-slate-100">{props.des}</div>
            </div>
            <div className="pb-4 border-b border-slate-100">
              <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" target="#blank" href="https://wa.me/351912852551">
                Rent Now
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="px-6 flex flex-col justify-end">
            <div className="py-2 text-slate-100 mt-4 font-bold">Features</div>
          </div>
          <div>
            {props.features.map((element, index) => (
              <div className="px-6 flex flex-col justify-end" key={index}>
                <div className="py-2 text-slate-100 border-bs border-slate-800 flex font-medium">
                  <div className="w-5 h-5 p-3 bg-slate-100 rounded-full flex justify-center items-center mr-2">
                    <i className="fas fa-check text-color-third"></i>
                  </div>
                  {element}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}