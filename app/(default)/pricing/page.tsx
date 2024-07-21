export const metadata = {
  title: 'Pricing - Folo Rentals',
  description: 'Page description',
}

import PricingSection from './pricing-section'
import Features from '@/components/features-05'
import Customers from '@/components/customers'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta-04'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <Features />
      {/* <Customers /> */}
      <Faqs />
      <Cta />
    </>
  )
}
