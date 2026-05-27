import React from 'react'
import Banner from '../components/Banner'
import Solutions from '../components/Solutions'
import CloudBanking from '../components/CloudBanking'
import CoreBankingFeatures from '../components/CoreBankingFeatures'
import CallToAction from '../components/CallToAction'
import MarqueeBanner from '../components/MarqueeBanner'
import DigitalBanking from '../components/DigitalBanking'
import Insights from '../components/Insights'
import CaseStudies from '../components/CaseStudies'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <main className="bg-[#05070a] overflow-x-hidden">
      <Banner />
      <Solutions />
      <CloudBanking />
      <CoreBankingFeatures />
      <CallToAction />
      <MarqueeBanner />
      <DigitalBanking />
      <Insights />
      <CaseStudies />
      <CtaBanner />
      <Footer />
    </main>
  )
}

export default Index
