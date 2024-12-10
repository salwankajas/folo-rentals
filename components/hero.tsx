import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'
import BikeImage from '@/public/images/bike-image.png';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigos-900 via-purples-900 to-pink-900 text-white overflow-hidden" id="home">
      <div className="container mx-auto px-4 pt-32 md:pt-60 relative">
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div> */}

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 space-y-8">
            <span className="inline-block py-1 px-3 bg-color-primary rounded-full text-slate-100 text-sm font-semibold backdrop-filter backdrop-blur-sm">
              Ride into the future
            </span>
            <h1 className="text-5xl md:text-6xl text-color-secondary font-bold leading-tight">
              Unleash Your
              <span className="block text-color-third">
                Urban Adventure
              </span>
            </h1>
            <p className="text-lg text-color-fourth max-w-md font-medium">
              Experience the city like never before with our cutting-edge bike rentals. Comfort meets style, technology meets the road.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/351912852551" className="px-6 py-3 bg-color-primary text-slate-100 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                Start Riding
              </a>
              <a href="#bikes" className="px-6 py-3 border border-color-primary text-color-third rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition duration-300">
                View Bikes
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-70 animate-pulse"></div> */}
            <Image
              src={BikeImage}
              width={600}
              height={400}
              alt="Futuristic Bike"
              className="relative z-10 transform hover:rotate-6 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}