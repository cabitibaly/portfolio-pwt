"use client"

import Image from "next/image"
import Link from "next/link"

const FooterSection = () => {
    return (
        <footer className="overflow-hidden relative top-0 bg-bleu-2 w-srceen h-[50vh] flex items-center justify-center max-lg:h-[60vh] max-sm:h-screen">
            <div className="sticky top-0 z-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="animate-blob absolute left-1/12 translate-x-1/2 w-1/3 aspect-square rounded-full bg-rouge filter blur-[20px] max-lg:w-2/5 max-lg:-left-[6%] max-md:translate-none max-md:left-0 max-md:w-2/3"></div>
                    <div className="animate-blob delay-300 absolute right-1/12 -translate-x-1/2 w-1/3 aspect-square rounded-full bg-vert-9 filter blur-[20px] max-lg:w-2/5 max-lg:-right-[6%] max-md:translate-none max-md:right-0 max-md:w-2/3"></div>
                    <div className="animate-blob delay-800 absolute bottom-[6%] w-1/3 aspect-square rounded-full bg-jaune filter blur-[20px] max-md:bottom-[10%] max-lg:w-2/5 max-md:w-2/3 max-xs:bottom-1/5"></div>
                </div>                
            </div>
            <div className="absolute top-0 left-0 z-20 border border-bleu-1/40 p-6 bg-gris-8/10 filter backdrop-blur-[35px] w-screen h-screen"></div>
            <div className="px-[100px] py-16 absolute z-30 top-0 left-0 w-full h-full flex items-start justify-between gap-12 max-lg:flex-col max-lg:justify-start max-896:px-4 max-896:py-8">
                <div className="w-3/5 flex flex-col items-start justify-center gap-4 max-xl:w-1/2 max-lg:w-full">
                    <div className="relative flex items-center justify-center aspect-5-1 w-[300px] max-md:w-[200px]">
                        <Image src={"/powertech.png"} fill alt="logo powertech" className="w-full aspect-5-1" />
                    </div>
                    <p className="text-xl text-gris-12 text-left font-normal max-md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis ipsum rerum distinctio. 
                        Voluptatum, at laboriosam!.                
                    </p>
                </div>
                <div className="w-2/5 flex items-start justify-between gap-8 max-xl:w-1/2 max-lg:w-full max-sm:flex-col">
                    <div className="flex flex-col items-start justify-start gap-4">
                        <span className="text-left text-bleu-9 text-3xl font-bold">Navigations</span>
                        <Link href={"/"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            Accueil
                        </Link>
                        <Link href={"/services"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            Services
                        </Link>
                        <Link href={"/projets"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            Projets
                        </Link>
                        <Link href={"/a-propos"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            À propos
                        </Link>
                        <Link href={"/contact"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4">
                        <span className="text-left text-bleu-9 text-3xl font-bold">Réseau social</span>
                        <Link href={"/"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            Facebook
                        </Link>
                        <Link href={"/services"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            WhatsApp
                        </Link>
                        <Link href={"/projets"} className="text-left text-2xl text-gris-12 font-semibold transition ease-in-out duration-300 hover:text-bleu-9 ">
                            TikTok
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
