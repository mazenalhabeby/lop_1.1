import BtnWithBorder from '@/components/BtnWithBorder'
import TitleunderLine from '@/components/TitleunderLine'
import StoreIcons from '@/components/StoreIcons'

const Hero = () => {
  return (
    <section style={{height: 'calc(100vh - 76px)'}} className=" relative">
      <div className="h-full before:absolute before:inset-0 before:bg-[url('/images/pharaohs-wall.jpg')] before:bg-center before:opacity-80 before:blur-sm before:conttent-['']"></div>
      <div className="absolute top-0 h-full w-full">
        <div className="h-[40%] w-full"></div>
        <div
          className={`grid grid-rows-2 h-[60%] bg-slate-200 dark:bg-slate-800 pb-3 2xl:pb-0`}>
          <div className="row-start-2 self-end 2xl:self-center hero_content pt-2">
            <div className="flex flex-col text-center items-center gap-y-5">
              <div className="flex flex-col gap-1">
                <h2 className=" capitalize font-aclonica tracking-wider text-lg">
                  available soon on
                </h2>
                <TitleunderLine />
              </div>
              <div className="flex flex-row gap-6">
                <StoreIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute w-full h-[80%] top-1 flex items-center justify-center">
        <div className="absolute rounded-lg w-full md:w-4/5 h-4/5 md:h-4/5 bg-black">
          <video
            autoPlay={true}
            muted
            preload="metadata"
            playsInline
            loop
            src="/videos/hero-video.mp4"
            data-object-fit="cover"
            data-object-position="center center"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            className="h-full w-full rounded-lg opacity-70"></video>
        </div>
        <div className="absolute w-[95%] md:w-[78%] h-[83%] md:h-[83%] border-2 rounded-tr-[3rem] rounded-bl-[3rem] border-yellow-600 dark:border-yellow-500 flex flex-col gap-2 items-center justify-center">
          <div className="flex flex-col text-center gap-2 text-white text-2xl md:text-4xl">
            <h1 className="uppercase font-aclonica">
              league of{' '}
              <span className="text-3xl md:text-5xl text-yellow-500">
                pharaohs
              </span>
            </h1>
            <span className="uppercase font-aclonica">on the blockchain</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <BtnWithBorder
              content="buy lop"
              width={'11rem'}
              height={'4rem'}
              href={'/ico'}
            />
            {/* <BtnWithBorder
              content="papyrus"
              width={'11rem'}
              height={'4rem'}
              href={'/'}
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
