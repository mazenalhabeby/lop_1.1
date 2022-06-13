import Link from 'next/link'

const BtnWithBorder = ({content, width, height, href}) => {
  return (
    <div
      className={`flex relative items-center justify-center`}
      style={{width: width, height: height}}>
      <Link href={href}>
        <a
          className={`flex text-white capitalize font-aclonica tracking-widest text-lg bg-slate-600 items-center justify-center cursor-pointer hover:text-yellow-500 transition-all duration-300`}
          style={{
            width: `calc(${width} - 0.5rem)`,
            height: `calc(${height} - 0.5rem)`,
          }}>
          {content}
          <div className=" absolute border-[2px] w-full h-full rounded-tr-[2rem] rounded-bl-[2rem] border-yellow-600 hover:rounded-none transition-all duration-300"></div>
        </a>
      </Link>
    </div>
  )
}

export default BtnWithBorder
