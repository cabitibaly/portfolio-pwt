import FooterSection from "@/components/accueil/footer"
import Navbar from "@/components/navigation/navbar"
import AutreProjet from "@/components/projet/description/AutreProjet"
import GallerieProjet from "@/components/projet/description/gallerieProjet"
import HeroDescription from "@/components/projet/description/heroDescription"

interface Props {
    params: Promise<{
        id: string
    }>
}

const DescriptionProjet = async ({params}: Props) => {
    const { id } = await params;

    return (
        <>        
            <Navbar />
            <HeroDescription id={id} />
            <GallerieProjet id={id} />
            <AutreProjet />
            <FooterSection />
        </>
    )
}

export default DescriptionProjet
