import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Marquee from '../components/Marquee/Marquee'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Footer from '../components/Footer/Footer'
import InformationOverload from '../components/sections/InformationOverload'
import Pillars from '../components/sections/Pillars'
import ImaginePartner from '../components/sections/ImaginePartner'
import EventSection from '../components/sections/EventSection'
import CTASection from '../components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <section className="py-16 container mx-auto px-6">
          <SectionTitle>Excesso de informação</SectionTitle>
          <InformationOverload />
        </section>

        <section className="py-16 bg-contrast/5">
          <div className="container mx-auto px-6">
            <SectionTitle>Pilares</SectionTitle>
            <Pillars />
          </div>
        </section>

        <section className="py-16 container mx-auto px-6">
          <SectionTitle>Imagine ter uma sócia</SectionTitle>
          <ImaginePartner />
        </section>

        <section className="py-16 bg-contrast/5">
          <div className="container mx-auto px-6">
            <SectionTitle>Evento</SectionTitle>
            <EventSection />
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6">
            <CTASection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
