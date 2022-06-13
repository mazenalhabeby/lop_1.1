import {socialMediaLinks} from '@/data/socialMediaLinks'
import Link from 'next/link'

const SocialMediaNavbar = () => {
  return (
    <div className="bg-slate-800 text-slate-50 p-2 lg:px-4">
      <div className=" container mx-auto flex flex-row gap-2 items-center justify-end">
        <span className=" text-xs tracking-widest font-aclonica capitalize">
          join the community :
        </span>
        <div className=" flex flex-row gap-2">
          {socialMediaLinks.map((link) => {
            return (
              <Link href={link.socialLink} key={link.id}>
                <a>
                  <link.iconName className={`w-4 fill-slate-50`} />
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SocialMediaNavbar
