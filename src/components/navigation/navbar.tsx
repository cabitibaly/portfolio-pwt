"use client"
import Image from "next/image"
import Link from "next/link"
import NavigationLink from "./navigationLink"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {  
    const [isOpen, setIsOpen] = useState(false)  

    useEffect(() => {

        if(isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [isOpen])

    return (
        <nav 
            className="
                border border-bleu-1/40 bg-gris-8/10 backdrop-blur-[35px] px-8 py-3 fixed z-50 top-12 left-1/2 -translate-1/2
                w-4/5 rounded-full flex items-center justify-between gap-8 max-lg:w-[90%] max-md:w-full max-md:top-0 max-md:translate-0 max-md:left-0
                max-md:rounded-none max-md:py-4 max-md:border-x-0 max-md:border-t-0
            "
        >        
            <div className="relative flex items-center justify-center aspect-5-1 w-[150px] max-896:w-[115px]">
                <Image src={"/powertech.png"} fill alt="logo powertech" className="w-full aspect-5-1" />
            </div>
            <ul className="flex items-center justify-between gap-8 max-896:gap-6 max-md:hidden">
                <NavigationLink name="Accueil" href="/" />
                <NavigationLink name="Services" href="/services" />
                <NavigationLink name="Projets" href="/projets" />
                <NavigationLink name="À propos" href="/a-propos" />
                <NavigationLink name="Contact" href="/contact" />
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hidden items-center justify-center max-md:flex">                
                <Menu strokeWidth={1.5} className="stroke-gris-12 size-8 max-md:block" />
            </button>
            {
                <div className={`overflow-auto p-4 absolute top-0 left-0 w-screen h-screen bg-gris-1 flex-col items-center justify-start gap-4 ${isOpen ? "flex" : "hidden"}`}>
                    <div className="w-full flex justify-end">
                        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                            <X strokeWidth={1} className="stroke-gris-12 size-16"/>
                        </button>                                                
                    </div>
                    <ul className="w-full flex-1 flex flex-col items-center justify-center gap-10">
                        <NavigationLink name="Accueil" href="/" />
                        <NavigationLink name="Services" href="/services" />
                        <NavigationLink name="Projets" href="/projets" />
                        <NavigationLink name="À propos" href="/a-propos" />
                        <NavigationLink name="Contact" href="/contact" />
                    </ul>
                    <div className="w-full flex items-center justify-between gap-6 flex-wrap">
                        <Link href={"/"} className="text-lg text-gris-8 font-normal">
                            Facebook
                        </Link>
                        <Link href={"/"} className="text-lg text-gris-8 font-normal">
                            WhatsApp
                        </Link>
                        <Link href={"/"} className="text-lg text-gris-8 font-normal">
                            TikTok
                        </Link>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar
