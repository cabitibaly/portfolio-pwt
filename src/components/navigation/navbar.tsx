"use client"
import Image from "next/image"
import Link from "next/link"
import NavigationLink from "./navigationLink"
import { Menu } from "lucide-react"

const Navbar = () => {
    return (
        <nav 
            className="
                border border-bleu-1/40 bg-gris-8/10 backdrop-blur-[35px] px-8 py-3 fixed top-12 left-1/2 -translate-1/2 z-40 
                w-4/5 rounded-full flex items-center justify-between gap-8 max-lg:w-[90%] max-md:w-full max-md:top-0 max-md:translate-0 max-md:left-0
                max-md:rounded-none max-md:py-4 m
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
            <div className="hidden items-center justify-center max-md:flex">                
                <Menu strokeWidth={1.5} className="stroke-gris-12 size-8 max-md:block" />
            </div>
        </nav>
    )
}

export default Navbar
