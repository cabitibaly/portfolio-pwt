"use client"
import { projets } from "@/data/projets"
import Image from "next/image"

const GallerieProjet = ({id}: {id: string}) => {
    const projet = projets.find((projet) => projet.id === Number(id))!

    return (
        <>
            <section className="overflow-hidden gallerie-bg sticky top-0 bg-bleu-2 w-screen h-screen flex flex-col items-center justify-start">                
                <div className="sticky top-0 left-0 z-10 border border-bleu-1/40 p-6 bg-gris-8/10 filter backdrop-blur-sm w-screen h-screen"></div>            
                <div className="absolute left-1/2 top-16 z-20 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                    <h2 className="text-5xl text-gris-1 text-center font-medium">Galerie</h2>
                </div>
            </section>
            <div className="px-[100px] py-16 relative z-30 top-0 left-0 w-full min-h-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-896:py-8">                                
                <div className="w-full flex flex-col items-center justify-start gap-10">
                    <div className="w-full flex items-center justify-between gap-8 max-lg:flex-col max-md:gap-4">
                        <div className="relative w-full aspect-square rounded-2xl ">
                            <Image src={projet.images[0]} fill alt="projet-img-1" className="w-full object-cover aspect-square rounded-2xl"/>
                        </div>
                        <div className="relative w-full aspect-square rounded-2xl ">
                            <Image src={projet.images[1]} fill alt="projet-img-2" className="w-full object-cover aspect-square rounded-2xl"/>
                        </div>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl ">
                        <Image src={projet.images[2]} fill alt="projet-img-3" className="w-full object-cover aspect-video rounded-2xl"/>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl ">
                        <Image src={projet.images[3]} fill alt="projet-img-4" className="w-full object-cover aspect-video rounded-2xl"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerieProjet
