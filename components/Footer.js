import {socialMediaLinks} from '@/data/socialMediaLinks'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-black py-4 text-center space-y-2 text-white">
      <div className="flex flex-row justify-center gap-4">
        {socialMediaLinks.map((link) => {
          return (
            <Link key={link.id} href={link.socialLink}>
              <a className={`rounded-full bg-slate-100 p-2`}>
                <link.iconName className={`w-6 fill-black`} />
              </a>
            </Link>
          )
        })}
      </div>
      <div>
        <Image
          src={'/images/WEBLOGO.png'}
          alt={'main-logo'}
          width={300}
          height={100}
        />
      </div>
      <p className="text-sm md:text-base">
        {' '}
        &trade; &#38; &copy; League of pharaohs. All rights reserved{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
