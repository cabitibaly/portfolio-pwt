"use client"
import CommentaireCard from "../cards/commentaireCard"
import CallToAction from "../cards/callToAction"

const AvisSection = () => {
    return (
        <>
            <section className="relative overflow-hidden avis-bg px-[100px] py-16 w-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">
                <h2 className="text-5xl text-gris-1 text-center font-medium">Avis de nos clients</h2>
                <div className="w-full grid grid-cols-3 items-center justify-start gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
                    <CommentaireCard />
                    <CommentaireCard />
                    <CommentaireCard />
                </div>
                <CallToAction />
            </section>
        </>
    )
}

export default AvisSection
