import vector_black_top from "@/public/images/vector-black-top.png"
import Image from 'next/image';
export default function Cta() {
  return (
    <section id="rent">
      <Image src={vector_black_top} alt="vector_black_top" className='scale-y-[-1] relative top-[2px] h-[220px]' />
      <div className="bg-color-third">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative px-8 pt-10 md:pt-14 ">
            {/* Content */}
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <div className="inline-flex font-medium text-color-primary text-slate-100">General Customer Service</div>
              </div>
              {/* <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Lisbon - 351 915 885 976</h2> */}
              <h2 className="h2 text-color-primary text-slate-100 pb-4">Porto - +351 912 852 551</h2>
              <div className="mt-4">
                <a href="https://wa.me/351912852551" className="text-center px-14 py-3 bg-color-primary text-color-third rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}