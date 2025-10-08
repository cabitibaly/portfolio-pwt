"use client"
import FooterSection from "@/components/accueil/footer"
import Navbar from "@/components/navigation/navbar"
import AutreProjet from "@/components/projet/description/AutreProjet"
import GallerieProjet from "@/components/projet/description/gallerieProjet"
import HeroDescription from "@/components/projet/description/heroDescription"

const DescriptionProjet = () => {
    return (
        <>        
            <Navbar />
            <HeroDescription />
            <GallerieProjet />
            <AutreProjet />
            <FooterSection />
        </>
    )
}

export default DescriptionProjet
