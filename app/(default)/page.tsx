export const metadata = {
	title: "Home - Folo Rentals",
	description: "Page description",
};

import Image from 'next/image';
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features03 from "@/components/features-03";
import Features04 from "@/components/features-04";
import Pricing from "./pricing-section";
import Cta from "@/components/cta";
import Testimonials02 from "@/components/testimonials-02";

import BikeImage from '@/public/images/bike-image.png'; 



export default function Home() {
	return (
		<>
			<Hero />
			<div className="max-w-6xl mx-auto px-4 sm:px-6" id="how-to-work">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Your money making bike</h2>
            <p className="text-lg text-slate-400">Maxxirent is better than your own motorcycle</p>
          </div>

          {/* Icons with text */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none -m-5">
            {/* Block #1 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24">
                  <g fill="none" fillRule="nonzero" opacity=".8">
                    <path className="fill-slate-600" d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z" />
                    <path className="fill-slate-200" d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z" />
                  </g>
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">Earn more on deliveries</div>
              <p className="text-sm text-slate-400">App approval and exclusive deliveries for you to earn more</p>
            </div>
            {/* Block #2 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path className="fill-slate-200" d="M9.423 12.278H.87L11.614.458l-1.037 7.264h8.553L8.386 19.542l1.037-7.264Zm-6.293-1h7.447l-.74 5.18 7.033-7.736H9.423l.74-5.18-7.033 7.736Z" opacity=".8" />
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">24h rescue and support</div>
              <p className="text-sm text-slate-400">Always have a spare bike for emergencies, 24 hours with you</p>
            </div>
            {/* Block #3 */}
            <div className="text-center p-5">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <g fill="none" fillRule="nonzero" opacity=".8">
                    <path className="fill-slate-600" d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z" />
                    <path className="fill-slate-200" d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </g>
                </svg>
              </div>
              <div className="font-bold text-slate-100 mb-1">Work safely</div>
              <p className="text-sm text-slate-400">No expenses for insurance, preventive maintenance and inspections</p>
            </div>
          </div>

        </div>
      </div>
			<Clients />
			<Features04 />
			{/* <Features /> */}
			{/* <Features02 /> */}
			<Features03 />
			{/* <TestimonialsCarousel /> */}
			
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-lg font-medium text-blue-500">The darling of the maxxiboys</h2>
            <h1 className="text-2xl font-bold text-white mt-2">HONDA PCX 125 CC</h1>
            <ul className="text-slate-400 mt-4 space-y-2">
              <li>2021/2022 Model</li>
              <li>45 km per liter (Gasoline)</li>
              <li>Equipped with phone support</li>
              <li>The best motto for you to deliver more.</li>
              <li>Padlock</li>
              <li>Via Verde</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src={BikeImage} alt="Honda PCX 125 CC" />
          </div>
        </div>
      </div>
    </section>
			<Pricing />
      <Testimonials02 />
			{/* <Testimonials /> */}
			<Cta />
		</>
	);
}