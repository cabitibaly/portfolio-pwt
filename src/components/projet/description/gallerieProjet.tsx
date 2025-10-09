"use client"

import Image from "next/image"

const GallerieProjet = () => {
    return (
        <section className="overflow-hidden gallerie-bg relative top-0 bg-bleu-2 w-screen h-screen flex items-center justify-center">
            <div className="sticky top-0 left-0 z-20 border border-bleu-1/40 p-6 bg-gris-8/10 filter backdrop-blur-sm w-screen h-screen"></div>
            <div className="overflow-x-hidden px-[100px] py-16 absolute z-30 top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-12 max-896:px-4 max-896:py-8">                
                <h2 className="text-5xl text-gris-1 text-center font-medium">Galerie</h2>
                <div className="w-full flex flex-col items-center justify-start gap-10">
                    <div className="w-full flex items-center justify-between gap-8 max-lg:flex-col max-md:gap-4">
                        <div className="relative w-full aspect-square rounded-2xl ">
                            <Image src={"/projet-img.jpg"} fill alt="projet-img" className="w-full object-cover aspect-square rounded-2xl"/>
                        </div>
                        <div className="relative w-full aspect-square rounded-2xl ">
                            <Image src={"/projet-1.jpg"} fill alt="projet-img" className="w-full object-cover aspect-square rounded-2xl"/>
                        </div>
                    </div>
                    <div className="relative w-full aspect-video rounded-2xl ">
                        <Image src={"/projet-2.webp"} fill alt="projet-img" className="w-full object-cover aspect-video rounded-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GallerieProjet
