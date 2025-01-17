import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'
// import LogoImg from '@/public/images/logo3.svg'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={240} height={60} priority alt="Stellar" />
    </Link>
  )
}