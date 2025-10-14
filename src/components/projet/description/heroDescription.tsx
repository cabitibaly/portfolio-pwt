"use client"
import ServiceFournisCard from "@/components/cards/serviceFournisCard"
import { projets } from "@/data/projets"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useRef } from "react"


const HeroDescription = ({id}: {id: string}) => {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const servicesRef = useRef<(HTMLDivElement | null )[]>([])  
    const aboutRef = useRef<HTMLDivElement>(null)
    const projet = projets.find((projet) => projet.id === Number(id))!

    useEffect(() => {
        const heroText = heroTextRef.current
        const services = servicesRef.current
        const about = aboutRef.current

        if (!heroText || !services || !about) return

        const tl = gsap.timeline()

        tl.to(
            heroText,
            {scale: 1, transformOrigin: "center center", delay: 1, duration: 1, ease: "power2.inOut"}
        )

        for (let i = 0; i < services.length; i++) {
            const el = services[i]

            if (!el) continue

            tl.to(
                el,
                {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "expo.inOut"}
            )
        }

        tl.to(
            about,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        )

    }, [])

    return (
        <section className="overflow-hidden px-[100px] pt-36 pb-28 relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 max-896:px-4 max-md:pt-28 max-md:pb-20">
            <div className="absolute -top-40 -left-40 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-rouge rounded-full max-896:bg-rouge max-896:-top-80 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div className="absolute -top-32 -right-32 -z-40 filter blur-[1000px] w-[854px] h-[854px] bg-jaune rounded-full max-896:bg-jaune max-896:top-1/3 max-896:left-20 max-896:blur-[400px] max-896:size-full"></div>
            <div ref={heroTextRef} className="scale-0 w-full flex flex-col items-center justify-center gap-6">
                <h1 className="text-5xl text-gris-12 font-semibold text-center max-md:text-4xl">{projet.titre}</h1>
                <div className="flex flex-wrap items-center justify-center gap-4 ">
                    {
                        projet.servicesFournis.map((nom, index) => (
                            <ServiceFournisCard
                                key={index}
                                nomService={nom}
                                ref={(el: HTMLDivElement) => {(servicesRef.current[index] = el)}}
                            />
                        ))
                    }                    
                </div>
                <div ref={aboutRef}  className="scale-0 border border-bleu-1/40 p-6 bg-bleu-8/10 backdrop-blur-[35px] rounded-3xl w-3/5 flex flex-col items-center justify-center gap-4 max-xl:w-4/5 max-md:w-full">
                    <span className="text-3xl text-gris-1 text-center font-semibold">À propos</span>
                    <p className="text-2xl text-gris-1 text-center font-normal max-lg:text-xl">
                        {projet.description}
                    </p>
                    {    
                        projet.href &&
                        <Link 
                            href={projet.href} 
                            className="border border-bleu-8 shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                            hover:bg-bleu-2 hover:border-bleu-2 hover:text-bleu-9 max-md:w-full"
                        >
                            Voir le site
                        </Link>
                    }
                </div>
            </div>
        </section>
    )
}

export default HeroDescription
