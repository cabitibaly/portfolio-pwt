"use client"

import Navbar from "@/components/navigation/navbar"

const Accueil = () => {
    return (
        <>
            <Navbar />
            <section className=" overflow-hidden relative w-screen h-screen flex items-center justify-center">
                <div className="absolute -top-40 -left-40 filter blur-[1000px] w-[854px] h-[854px] bg-bleu-9 rounded-full max-896:-top-80 max-896:left-1/6 max-896:blur-[400px] max-896:size-full"></div>
                <div className="absolute -top-48 -right-[10%] filter blur-[1000px] w-[854px] h-[854px] bg-vert rounded-full max-896:top-1/3 max-896:left-1/6 max-896:blur-[400px] max-896:size-full"></div>
            </section>
        </>
    )
}

export default Accueil
