"use client"

import Link from "next/link"
import CommentaireCard from "../cards/commentaireCard"

const AvisSection = () => {
    return (
        <section className="relative overflow-hidden avis-bg px-[100px] py-16 w-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">
            <h2 className="text-5xl text-gris-1 text-center font-medium">Avis de nos clients</h2>
            <div className="w-full grid grid-cols-3 items-center justify-start gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
                <CommentaireCard />
                <CommentaireCard />
                <CommentaireCard />
            </div>
            <div className="border border-bleu-1/40 p-6 bg-bleu-9/10 backdrop-blur-[35px] rounded-xl w-full flex items-center justify-center gap-8">
                <div className="w-3/5 flex flex-col items-center justify-start gap-6 max-xl:w-full">
                    <h3 className="text-center text-4xl text-gris-12 font-medium max-lg:text-3xl max-sm:text-2xl">Et si on transformait votre projet en réalité dès aujourd'hui ?</h3>
                    <span className="text-center text-2xl text-gris-6 font-normal max-lg:text-xl">
                        De l’idée à l’action, nous vous accompagnons pour concrétiser vos ambitions. Prêt à passer à l’étape suivante ?
                    </span>
                    <Link 
                        href={"/contact"} 
                        className="border border-bleu-8 shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                        hover:bg-bleu-2 hover:border-bleu-2 hover:text-bleu-9 max-md:w-full"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>      
                              
            </div>
        </section>
    )
}

export default AvisSection
