"use client"
import FooterSection from "@/components/accueil/footer"
import Navbar from "@/components/navigation/navbar"
import BodyService from "@/components/services/bodyService"
import HeroService from "@/components/services/heroService"
import ProcessSection from "@/components/services/processSection"

const Services = () => {
    return (
        <>
            <Navbar />
            <HeroService />
            <BodyService />
            <ProcessSection />
            <FooterSection />
        </>
    )
}

export default Services
