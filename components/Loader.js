import {motion} from 'framer-motion'
import Image from 'next/image'

const Loader = () => {
  return (
    <motion.div
      className="h-screen w-full text-white text-center flex flex-col justify-center items-center"
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <div className=" animate-bounce">
        <Image
          src={'/images/WEBLOGO.png'}
          alt="logo"
          width={450}
          height={150}
          priority
        />
      </div>
      <h2 className="text-4xl font-aclonica animate-pulse tracking-widest text-slate-900 dark:text-slate-100">
        Loading . . .
      </h2>
    </motion.div>
  )
}

export default Loader
