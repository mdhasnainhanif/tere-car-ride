'use client'
import Header from '@/components/Header/Header'
import styles from './page.module.css'
import Banner from '@/components/Banner/Banner'
import DownloadApp from '@/components/DownloadApp/DownloadApp'
import TereWorks from '@/components/tereWorks/TereWorks'
import TereBenefits from '@/components/TereBenefits/TereBenefits'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <DownloadApp/>
        <TereWorks />
        <TereBenefits/>
        <Footer />
    </>
  )
}
