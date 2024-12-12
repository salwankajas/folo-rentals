import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Testimonial01 from '@/public/images/testimonial-01.png'
import Testimonial02 from '@/public/images/testimonial-02.png'
import Testimonial03 from '@/public/images/testimonial-03.png'

interface Item {
  img: StaticImageData
  name: string
  role: string
  twitter: string
  quote: string
}

export default function Testimonials02() {

  const items: Item[] = [
    {
      img: Testimonial01,
      name: 'John Doe',
      role: 'Tourist',
      twitter: '#0',
      quote: "Renting a bike from this company was the highlight of my trip! The process was smooth, and the bike was in excellent condition. Highly recommend!",
    },
    {
      img: Testimonial02,
      name: 'Jane Smith',
      role: 'Local Commuter',
      twitter: '#0',
      quote: "I use their bike rental service for my daily commute, and it's been fantastic. The bikes are always well-maintained, and the customer service is top-notch.",
    },
    {
      img: Testimonial03,
      name: 'Emily Johnson',
      role: 'Adventure Seeker',
      twitter: '#0',
      quote: "Exploring the city on a rented bike was an amazing experience. The rental process was easy, and the staff was very helpful. I'll definitely be back!",
    },
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-color-primary pb-4">Our Customers<br/> Love Us</h2>
            <p className="text-lg text-color-fourth">We are dedicated to providing the best bike rental experience. Here's what our customers have to say about their time with us.</p>
          </div>
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => ( 
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0" src={item.img} width={44} height={44} alt={item.name} />
                    <div className="grow">
                      <div className="font-bold text-color-third ">{item.name}</div>
                      <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                    </div>
                  </div>
                  <a className="shrink-0 text-slate-500" href="#0" aria-label="Member's Twitter">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-color-third">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}