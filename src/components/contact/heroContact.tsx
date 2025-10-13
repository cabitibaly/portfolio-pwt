"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const HeroContact = () => {
    const heroTextRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const localisationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const heroText = heroTextRef.current
        const form = formRef.current
        const localisation = localisationRef.current

        if (!heroText || !form || !localisation) return

        const tl = gsap.timeline()

        tl.to(
            heroText,
            {scale: 1, transformOrigin: "center center", delay: 1, duration: 1, ease: "power2.inOut"}
        ).to(
            form,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        ).to(
            localisation,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        )


    }, [])

    return (
        <section className="contact-bg overflow-hidden px-[100px] pt-36 pb-28 relative w-screen min-h-screen flex flex-col items-center justify-center gap-4 max-lg:pt-48 max-896:p-4 max-md:pt-28">
            <div className="w-full flex flex-col items-center justify-center gap-10">
                <h1 ref={heroTextRef} className="scale-0 w-4/5 text-5xl text-gris-1 font-semibold text-center max-lg:w-full max-md:text-4xl">
                    Un <span className="text-bleu-9">projet</span>, une <span className="text-bleu-9">question</span> ? Nous sommes disponibles.
                </h1>
                <div className="w-full flex items-center justify-center gap-8 max-lg:flex-wrap-reverse">
                    <div ref={localisationRef} className="scale-0 w-1/2 flex flex-col items-center justify-start gap-4 max-lg:flex-row max-lg:w-full max-md:flex-col max-md:justify-center">
                        <div className="w-full flex flex-col items-start justify-center gap-1 max-md:items-center">
                            <span className="text-xl text-gray-300 font-medium">Email</span>
                            <span className="text-2xl text-bleu-1 font-medium">powertechsarl22@gmail.com</span>
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-1 max-md:items-center">
                            <span className="text-xl text-gray-300 font-medium">Localisation</span>
                            <span className="text-2xl text-bleu-1 font-medium">Bobo-Dioulasso, secteur 22</span>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={e => e.preventDefault()} className="scale-0 border border-bleu-1/40 p-4 bg-bleu-8/10 backdrop-blur-[35px] rounded-3xl w-1/2 flex flex-col items-center justify-center gap-5 max-lg:w-full">
                        <div className="w-full flex flex-col items-start justify-center gap-2">                            
                            <input id="nom" type="text" className="border border-bleu-1/40 px-4 py-2 bg-transparent w-full rounded-lg outline-none text-bleu-1 text-base font-normal focus:border-bleu-9 focus:ring-1 focus:ring-bleu-9 placeholder:text-gray-300" placeholder="Nom..." required />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-2">                            
                            <input id="prenom" type="text" className="border border-bleu-1/40 px-4 py-2 bg-transparent w-full rounded-lg outline-none text-bleu-1 text-base font-normal focus:border-bleu-9 focus:ring-1 focus:ring-bleu-9 placeholder:text-gray-300" placeholder="Prénom..." />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-2">                            
                            <input id="email" type="email" className="border border-bleu-1/40 px-4 py-2 bg-transparent w-full rounded-lg outline-none text-bleu-1 text-base font-normal focus:border-bleu-9 focus:ring-1 focus:ring-bleu-9 placeholder:text-gray-300" placeholder="Email..." required />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-2">                            
                            <input id="telephone" type="text" className="border border-bleu-1/40 px-4 py-2 bg-transparent w-full rounded-lg outline-none text-bleu-1 text-base font-normal focus:border-bleu-9 focus:ring-1 focus:ring-bleu-9 placeholder:text-gray-300" placeholder="Téléphone..." required />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-2">                            
                            <textarea name="desc" id="desc" className=" resize-none border border-bleu-1/40 px-4 py-2 bg-transparent w-full h-28 rounded-lg outline-none text-bleu-1 text-base font-normal focus:border-bleu-9 focus:ring-1 focus:ring-bleu-9 placeholder:text-gray-300" placeholder="Description du projet..." required></textarea>
                        </div>
                        <button                             
                            className="border border-transparent shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                            hover:bg-transparent hover:border-bleu-9 hover:text-bleu-9 max-md:w-full"
                        >
                            Soumettre la demande
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HeroContact
