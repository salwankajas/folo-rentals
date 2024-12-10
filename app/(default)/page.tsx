export const metadata = {
  title: "Home - Folo Rentals",
  description: "Find the perfect rental in Porto with Folo Rentals. From short-term stays to long-term apartments, we offer a variety of properties to suit every need. Explore and book your ideal home today!",
};

import Image from 'next/image';
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Particles from '@/components/particles'
import Features03 from "@/components/features-03";
import Features04 from "@/components/features-04";
import Pricing from "./pricing-section";
import vector_black_top from "@/public/images/vector-black-top.png"
import Cta from "@/components/cta";
import WhatsappFloat from '@/components/whatsappFloat';
import Testimonials02 from "@/components/testimonials-02";

import BikeImage from '@/public/images/bike-image.png';



export default function Home() {
  return (
    <>
      <Hero />
      <section className=''>
        <Image src={vector_black_top} alt="vector_black_top" className='scale-y-[-1] relative top-[2px]' />
        <div className='bg-color-third relative'>
          <div className="max-w-6xl mx-auto px-4 sm:px-6" id="how-to-work">
            {/* <div className="absolute inset-0 max-w-6xl mx-auto px-6 sm:px-6">
            <Particles className="absolute inset-0 -z-10" quantity={100} />
          </div> */}

            <div className="py-12 md:py-20">
              {/* <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.color-primary),transparent)1]"> */}
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 z-[2]">
                <h2 className="h2 bg-clip-text text-color-primary text-slate-100 pb-4">Your money making bike</h2>
                <p className="text-lg text-color-fourth text-slate-100 ">FOLO is better than your own motorcycle</p>
              </div>

              {/* Icons with text */}
              <div className='max-w-6xl mx-auto px-4 relative sm:px-6 z-[3]'>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none bg-color-primary p-10 rounded-xl">
                  {/* Block #1 */}
                  <div className="text-center p-5">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24">
                        <g fill="none" fillRule="nonzero" opacity=".8">
                          <path className="fill-color-primary" d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z" />
                          <path className="fill-color-primary" d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="font-bold text-color-third mb-1">Earn more on deliveries</div>
                    <p className="text-sm text-color-fourth">App approval and exclusive deliveries for you to earn more</p>
                  </div>
                  {/* Block #2 */}
                  <div className="text-center p-5">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path className="fill-color-primary" d="M9.423 12.278H.87L11.614.458l-1.037 7.264h8.553L8.386 19.542l1.037-7.264Zm-6.293-1h7.447l-.74 5.18 7.033-7.736H9.423l.74-5.18-7.033 7.736Z" opacity=".8" />
                      </svg>
                    </div>
                    <div className="font-bold text-color-third mb-1">24h rescue and support</div>
                    <p className="text-sm text-color-fourth">Always have a spare bike for emergencies, 24 hours with you</p>
                  </div>
                  {/* Block #3 */}
                  <div className="text-center p-5">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <g fill="none" fillRule="nonzero" opacity=".8">
                          <path className="fill-color-primary" d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z" />
                          <path className="fill-color-primary" d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="font-bold text-color-third mb-1">Work safely</div>
                    <p className="text-sm text-color-fourth">No expenses for insurance, preventive maintenance and inspections</p>
                  </div>

                </div>
              </div>
              <div className=" mt-24 z-[2] relative" id="bikes">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h2 bg-clip-text text-color-primary text-slate-100 pb-4">Explore the City on Two Wheels</h2>
                  <p className="text-lg text-color-fourth text-slate-100 ">Rent a Bike, Feel the Freedom, and Discover New Horizons!</p>
                </div>
                <div className="max-w-6xl items-center mx-auto px-4 sm:px-6">
                  <div className="items-center py-12 md:py-20 bg-color-primarys bg-slate-100 rounded-xl border-2 border-color-primary">
                    <h2 className="text-lg font-medium text-color-third text-center ">The Star of the Streets</h2>
                    <h1 className="text-3xl font-bold text-color-primary text-center pb-12 md:pb-12">HONDA PCX 125 CC</h1>
                    <div className='flex flex-col md:flex-row border-t [border-image:linear-gradient(to_right,transparent,theme(colors.color-primary),transparent)1]'>
                      <div className="flex md:w-1/2 h-full mt-8 md:mt-0">
                        <Image src={BikeImage} alt="Honda PCX 125 CC" className='scale-x-[-1]' />
                      </div>
                      <div className="md:w-1/2 text-center md:text-left rounded-xl p-10">
                        <ul className="text-color-third mt-4 space-y-2 font-semibold text-lg">
                          <li>2021/2022 Model</li>
                          <li>45 km per liter (Gasoline)</li>
                          <li>Equipped with phone support</li>
                          <li>The best motto for you to deliver more.</li>
                          <li>Padlock</li>
                          <li>Via Verde</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center mt-10'>
                  <a href="https://wa.me/351912852551" className="text-center px-14 py-3 bg-color-primary text-color-third rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="max-md:hidden absolute left-[410px] bottom-[450px] z-[1] mb-20 -translate-x-1/2 blur-xl opacity-40 pointer-events-none" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs5" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#37c8c3" />
                    <stop offset="100%" stopColor="#37b7c3" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path fill="url(#bs5)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
              </svg>
            </div>
          </div>
        </div>
        <Image src={vector_black_top} alt="vector_black_top" className='relative bottom-[2px] w-full h-[180px]' />
      </section>

      {/* <Clients /> */}
      {/* <Features04 /> */}
      {/* <Features /> */}
      {/* <Features02 /> */}
      {/* <Features03 /> */}
      {/* <TestimonialsCarousel /> */}

      <Pricing />
      <Testimonials02 />
      {/* <Testimonials /> */}
      <WhatsappFloat />
    </>
  );
}