import {Link as ReactLink, animateScroll as scroll} from 'react-scroll'

const LinksComponent = ({links}) => {
  return (
    <div className="flex flex-1 items-center justify-center md:justify-end">
      <ul
        className={`flex flex-col md:flex-row tracking-widest capitalize text-center gap-8 md:gap-0`}>
        {links?.map((link) => (
          <li key={link.linkId}>
            <ReactLink
              className={`block lg:h-full w-32 cursor-pointer text-sm`}
              activeClass="font-aclonica text-yellow-500 md:text-yellow-700 dark:text-yellow-500 bg-[url('/images/border_light.png')] dark:bg-[url('/images/border.png')] bg-contain bg-bottom bg-no-repeat pb-4 md:pb-[0.35rem]"
              to={link.href}
              spy={true}
              smooth={true}
              duration={800}
              offset={-60}>
              {link.linkName}
            </ReactLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinksComponent
