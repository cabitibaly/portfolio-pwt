"use client"

import FooterSection from "@/components/accueil/footer"
import Navbar from "@/components/navigation/navbar"
import BodyProjet from "@/components/projet/bodyProjet"
import HeroProjet from "@/components/projet/heroProjet"

const Projet = () => {
    return (
        <>
            <Navbar />
            <HeroProjet />
            <BodyProjet />
            <FooterSection />
        </>
    )
}

export default Projet
