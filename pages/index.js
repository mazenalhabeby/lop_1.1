import Features from '@/components/pages/home/Features'
import Hero from '@/components/pages/home/Hero'
import Partners from '@/components/pages/home/Partners'
import RoadMap from '@/components/pages/home/RoadMap'
import Teams from '@/components/pages/home/Teams'
import Tokenomics from '@/components/pages/home/Tokenomics'
import HomeLayout from '@/layouts/HomeLayout'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}>
      <Hero />
      <Features />
      <Tokenomics />
      <RoadMap />
      <Partners />
      <Teams />
    </motion.div>
  )
}

Home.getLayout = HomeLayout
