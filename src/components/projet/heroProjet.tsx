"use client"
import Link from "next/link"

const HeroProjet = () => {
    return (
        <section className="overflow-hidden px-[100px] pt-36 pb-28 relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 max-896:px-4 max-md:pt-28 max-md:pb-20">
            <div className="absolute -top-40 -left-40 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-rouge rounded-full max-896:bg-rouge max-896:-top-80 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div className="absolute -top-32 -right-32 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-jaune rounded-full max-896:bg-jaune max-896:top-1/3 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <h1 className="text-5xl text-gris-12 font-semibold text-center max-md:text-4xl">Des projets qui prennent <span className="text-bleu-8">vie</span></h1>
                <p className="w-3/5 text-2xl text-gris-12 font-normal text-center max-xl:w-full max-md:text-xl">
                    Chaque projet est une histoire unique, construite avec passion et expertise. 
                    Découvrez comment nous transformons les idées en réalisations concrètes.
                </p>
                <div className="flex items-center justify-center gap-4 max-md:w-full max-md:flex-col">
                    <Link 
                        href={"/contact"} 
                        className="border border-transparent shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                        hover:bg-transparent hover:border-bleu-9 hover:text-bleu-9 max-md:w-full"
                    >
                        Rendez-vous
                    </Link>
                    <Link 
                        href={"/services"} 
                        className="border border-bleu-9 bg-gris-8/10 backdrop-blur-[35px] shadow-xl px-4 py-2 text-lg text-bleu-9 font-bold rounded-full flex items-center justify-center transition duration-300 ease-out 
                        hover:border-bleu-1 hover:text-bleu-1 max-md:w-full">
                        Nos services
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroProjet
