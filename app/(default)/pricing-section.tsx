import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import Pricing from '@/components/pricing'

export default function PricingSection() {
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
            <Pricing />
            <Pricing />
            <Pricing />
          </div>
        </div>
      </div>
    </section>
  )
}
