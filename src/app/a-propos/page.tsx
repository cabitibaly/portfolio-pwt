"use client"
import HeroApropos from '@/components/a-propos/heroApropos'
import NosValeurSection from '@/components/a-propos/nosValeursSection'
import FooterSection from '@/components/accueil/footer'
import Navbar from '@/components/navigation/navbar'

const Apropos = () => {
    return (
        <>
            <Navbar />
            <HeroApropos />
            <NosValeurSection />
            <FooterSection />
        </>
    )
}

export default Apropos
