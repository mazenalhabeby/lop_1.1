import Footer from '@/components/Footer'
import MainNavbar from '@/components/navbar/MainNavbar'
import SocialMediaNavbar from '@/components/navbar/SocialMediaNavbar'
import {HomeLinks} from 'data/links'
import React from 'react'
import ContainerLayout from './ContainerLayout'

const HomeLayout = (page) => {
  return (
    <ContainerLayout>
      <SocialMediaNavbar />
      <MainNavbar links={HomeLinks} />
      {page}
      <Footer />
    </ContainerLayout>
  )
}
export default HomeLayout
