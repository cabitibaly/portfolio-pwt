"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const HeroApropos = () => {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const whoAreWeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const heroText = heroTextRef.current
        const whoAreWe = whoAreWeRef.current

        if (!heroText || !whoAreWe) return

        const tl = gsap.timeline()

        tl.to(
            heroText,
            {scale: 1, transformOrigin: "center center", delay: 1, duration: 1, ease: "power2.inOut"}
        ).to(
            whoAreWe,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        )

    }, [])

    return (
        <section className="bubble-bg overflow-hidden px-[100px] pt-36 pb-28 relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 max-896:px-4 max-md:pt-28 max-md:pb-20">
            <div className="w-full flex flex-col items-center justify-center gap-10">
                <h1 ref={heroTextRef} className="scale-0 w-4/5 text-5xl text-gris-12 font-semibold text-center max-lg:w-full max-md:text-4xl">
                    La <span className="text-bleu-11">puissance</span> de la technologie, 
                    au service de votre performance.
                </h1>
                <div ref={whoAreWeRef} className="scale-0 border border-bleu-1/40 p-6 bg-bleu-8/10 backdrop-blur-[35px] rounded-3xl w-4/5 flex flex-col items-center justify-center gap-4 max-xl:w-4/5 max-lg:w-full">
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

export default HeroApropos
