"use client"
import FooterSection from "@/components/accueil/footer"
import Navbar from "@/components/navigation/navbar"
import BodyService from "@/components/service/bodyService"
import HeroService from "@/components/service/heroService"
import ProcessSection from "@/components/service/processSection"

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
