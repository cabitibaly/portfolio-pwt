"use client"
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useRef } from "react"

const partenaires = [
    "LigdiCash",
    "G5 Associate",
    "ESI",
    "Aube Nouvelle",
    "Futurion Tech",
];

const Hero = () => {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const contactLinkRef = useRef<HTMLAnchorElement>(null)
    const projetsLinkRef = useRef<HTMLAnchorElement>(null)
    const partenairesRef = useRef<(HTMLDivElement | null )[]>([])
    
    useHeroAnimation({heroTextRef, contactLinkRef, projetsLinkRef})

    useEffect(() => {
        const associes = partenairesRef.current

        if (!associes) return

        const tl = gsap.timeline()

        tl.to(
            "#trust-us",
            {opacity: 1, delay: 2.5, duration: 1, ease: "power2.inOut"}
        )

        for (let i = 0; i < associes.length; i++) {
            const el = associes[i]

            if (!el) continue

            tl.to(
                el,
                {scale: 1, transformOrigin: "center center", duration: 0.3, ease: "expo.inOut"}
            )
        }
    })    

    return (
        <section className="overflow-hidden px-[100px] pt-36 pb-28 relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 max-896:px-4 max-md:justify-between max-md:pt-28 max-md:pb-20">
            <div className="absolute -top-40 -left-40 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-bleu-9/70 rounded-full max-896:bg-bleu-9/90 max-896:-top-80 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div className="absolute -top-32 -right-32 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-vert-9/70 rounded-full max-896:bg-vert-9/90 max-896:top-1/3 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div ref={heroTextRef} className="scale-0 w-full flex flex-col items-center justify-center gap-6 max-md:my-auto ">
                <h1 className="text-5xl text-gris-12 font-semibold text-center max-md:text-4xl">Votre partenaire de <span className="text-bleu-9">confiance.</span></h1>
                <p className="w-3/5 text-2xl text-gris-12 font-normal text-center max-xl:w-full max-md:text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam consequuntur nesciunt 
                    fugiat modi quo doloribus? Ad eos ut molestiae repellat maxime.
                </p>
                <div className="flex items-center justify-center gap-4 max-md:w-full max-md:flex-col">
                    <Link 
                        ref={contactLinkRef}
                        href={"/contact"} 
                        className="scale-0 border border-transparent shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                        hover:bg-transparent hover:border-bleu-9 hover:text-bleu-9 max-md:w-full"
                    >
                        Rendez-vous
                    </Link>
                    <Link 
                        ref={projetsLinkRef}
                        href={"/projets"} 
                        className="scale-0 border border-bleu-9 bg-gris-8/10 backdrop-blur-[35px] shadow-xl px-4 py-2 text-lg text-bleu-9 font-bold rounded-full flex items-center justify-center transition duration-300 ease-out 
                        hover:border-bleu-1 hover:text-bleu-1 max-md:w-full">
                        Nos projets
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-16 w-full flex flex-col items-center justify-center gap-4 max-md:static max-md:px-4 max-md:bottom-0">
                <span id="trust-us" className="opacity-0 text-2xl text-gris-12 font-bold text-center max-md:text-xl">Ils nous font confiance</span>
                <div className="w-full flex items-center justify-center space-x-4 max-md:carousel max-md:justify-normal">
                    {partenaires.map((nom, index) => (
                    <div
                        key={index}
                        ref={(el) => {(partenairesRef.current[index] = el)}}
                        className="scale-0 px-4 py-2 carousel-item items-center justify-center rounded-full bg-bleu-1 text-gris-8 font-bold text-xl max-md:py-1 max-md:px-2 max-md:text-lg"
                        >
                        {nom}
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
