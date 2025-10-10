"use client"

import ProjetCard from "../cards/projetCard"

const ProjetSection = () => {
    return (
        <>
            <section className="overflow-hidden sticky top-0 py-16 bg-gris-12 w-screen h-screen flex flex-col items-center justify-start" >
                <h2 className="text-5xl text-gris-1 text-center font-medium">Nos Projets</h2>
                <div className="sticky top-0 z-0 w-full h-full flex items-center justify-center">
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <div className="animate-blob absolute left-1/12 translate-x-1/2 w-1/3 aspect-square rounded-full bg-vert-9 filter blur-[20px] max-lg:w-2/5 max-lg:-left-[6%] max-md:translate-none max-md:left-0 max-md:w-2/3"></div>
                        <div className="animate-blob delay-800 absolute right-1/12 -translate-x-1/2 w-1/3 aspect-square rounded-full bg-rouge filter blur-[20px] max-lg:w-2/5 max-lg:-right-[6%] max-md:translate-none max-md:right-0 max-md:w-2/3"></div>                    
                    </div>                
                </div>                
            </section>
            <div className="overflow-hidden relative top-0 z-40 px-[100px] py-16 w-screen min-h-screen bg-transparent flex flex-col items-center justify-start max-896:px-4 max-896:py-8">                                    
                <div className="w-full grid grid-cols-3 gap-10 items-center justify-center max-xl:grid-cols-2 max-sm:grid-cols-1">
                    <ProjetCard />
                    <ProjetCard />
                    <ProjetCard />                    
                    <ProjetCard />
                    <ProjetCard />
                    <ProjetCard />                    
                </div>                                    
            </div>
        </>
    )
}

export default ProjetSection
