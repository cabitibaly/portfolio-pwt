"use client"

import ProjetCard from "../cards/projetCard"

const ProjetSection = () => {
    return (
        <section className="relative top-0 bg-gris-12 w-screen flex flex-col items-center justify-start" >
            <div className="absolute -z-0 top-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <div className="animate-blob relative left-5 w-2/5 aspect-square rounded-full bg-vert-9 filter blur-[100px] max-md:blur-[50px] max-md:w-full"></div>
                <div className="animate-blob delay-200 relative right-5 w-2/5 aspect-square rounded-full bg-rouge filter blur-[100px] max-md:blur-[50px] max-md:w-full"></div>
            </div>
            <div className=" top-0 z-40 px-[100px] py-16 w-full bg-transparent flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">                
                <h2 className="text-5xl text-gris-1 text-center font-medium">Nos Projets</h2>
                <div className="w-full grid grid-cols-3 gap-10 items-center justify-center max-xl:grid-cols-2 max-sm:grid-cols-1">
                    <ProjetCard />
                    <ProjetCard />
                    <ProjetCard />                    
                    <ProjetCard />
                    <ProjetCard />
                    <ProjetCard />                    
                </div>                                    
            </div>
        </section>
    )
}

export default ProjetSection
