"use client"
import AproposSection from "@/components/accueil/aproposSection"
import AvisSection from "@/components/accueil/avisSection"
import Hero from "@/components/accueil/hero"
import ProjetSection from "@/components/accueil/projetSection"
import ServiceSection from "@/components/accueil/serviceSection"
import Navbar from "@/components/navigation/navbar"

const Accueil = () => {
    return (
        <>
            <Navbar />            
            <Hero />            
            <ServiceSection />
            <ProjetSection /> 
            <AproposSection />
            <AvisSection />
        </>
    )
}

export default Accueil
