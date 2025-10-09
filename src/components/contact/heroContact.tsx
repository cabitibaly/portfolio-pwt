"use client"

const HeroContact = () => {
    return (
        <section className="bubble-bg overflow-hidden p-[100px] relative w-screen h-screen flex flex-col items-center justify-center gap-4 max-896:p-4 max-md:pt-10">
            <div className="w-full flex flex-col items-center justify-center gap-10">
                <h1 className="w-4/5 text-5xl text-gris-12 font-semibold text-center max-lg:w-full max-md:text-4xl">
                    La <span className="text-bleu-11">puissance</span> de la technologie, 
                    au service de votre performance.
                </h1>
                <div className="border border-bleu-1/40 p-6 bg-bleu-8/10 backdrop-blur-[35px] rounded-3xl w-4/5 flex flex-col items-center justify-center gap-4 max-xl:w-4/5 max-lg:w-full">
                    <span className="text-4xl text-gris-12 text-center font-semibold">Qui nous sommes ?</span>
                    <p className="text-3xl text-gris-12 text-center font-normal max-lg:text-xl">
                        PowerTech SARL est une entreprise innovante spécialisée dans les solutions technologiques 
                        pour les entreprises et particuliers, offrant une gamme variée de services et produits en 
                        informatique et technologies de l’information.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroContact
