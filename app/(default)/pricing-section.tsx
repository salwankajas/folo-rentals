import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import Pricing from '@/components/pricing'
interface Item {
  planName: string
  price: number
  duration: string
  des:string
  features:string[]
}

export default function PricingSection() {
  const items: Item[] = [
    {
      planName: 'Daily Adventure Plan',
      price:10,
      duration: 'day',
      des:"Ideal for tourists, this plan offers a reliable bike for your daily adventures.",
      features:["Perfect for Short-term use, sightseeing, and getting around easily","Well-maintained bike with all necessary accessories","Helmet Included for safety","24/7 Roadside Assistance for peace of mind","GPS Tracking for easy navigation and security","Flexible Pick-up/Drop-off locations for your convenience","Basic Insurance included for added protection","Fuel Efficiency Tracking to help you monitor your usage"]
    },
    {
      planName: 'Monthly Ride Plan',
      price:200,
      duration: 'month',
      des:"This plan is designed for those who need a bike for everyday travel whether it’s to work, school, or for running errands.",
      features:["Ideal for Daily commuting, regular errands, or short-term transportation needs","Strictly for personal use. Not for deliveries or commercial purposes","Well-maintained bike to ensure a smooth, reliable ride every day","Helmet Included for safety","24/7 Roadside Assistance for peace of mind in case of emergencies","Basic Insurance included for protection"]
    },
    {
      planName: 'Premium Rental',
      price:65,
      duration: 'week',
      des:"For those who need a bike for both personal use and delivery jobs",
      features:["Commuting Daily travel to work, school, or errands","Perfect for food delivery, courier services, or any other delivery-related tasks","Well-maintained bike built for both personal and commercial use","Helmet Included for safety","24/7 Roadside Assistance for peace of mind, whether you're commuting or delivering","GPS Tracking for security and route planning","Flexible Pick-up/Drop-off locations for your convenience","Basic Insurance included for protection during personal and professional use","Fuel Efficiency Tracking to keep track of your bike usage and efficiency","Durable Design for long rides, errands, and delivery tasks"]
    },
  ]
  return (
    <section className="relative" id="plans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="mt-[-100px] pb-12 md:pb-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-color-third bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Rental Plans</div>
            </div>
            <h2 className="h2 bg-clip-text text-color-primary bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Choose Your Perfect Ride</h2>
            <p className="text-lg text-color-fourth">We offer flexible rental options to suit your needs, whether you're looking for a quick ride or a long-term rental. Our bikes are well-maintained and ready for your next adventure.</p>
          </div>
          <div className='flex gap-6 flex-wrap justify-center'>
          {items.map((item, index) => ( 
            <Pricing planName={item.planName} price={item.price} duration={item.duration} des={item.des} features={item.features}/>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
