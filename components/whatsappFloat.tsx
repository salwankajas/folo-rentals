import React from 'react';
import whatsapp from '/public/images/whatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function WhatsappFloat(){
    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll fixed bottom-[25px] right-[30px] z-[99] w-[48px]">
                <Link target='#blank' href="https://wa.me/351912852551"><li><Image src={whatsapp} alt="" /></li></Link>
                </ul>
            </div>
        </div>
        
    )
}
