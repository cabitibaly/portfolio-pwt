"use client"
import { useRef } from "react"
import ServiceCard from "../cards/serviceCard"
import { useServiceCardAnimation } from "@/hooks/useServiceCardAnimation"
import { services } from "@/data/services"

const BodyService = () => {
    const sercicesCardRef = useRef<(HTMLDivElement | null)[]>([])
    
    useServiceCardAnimation({sercicesCardRef})

    return (
        <section className="relative overflow-hidden liste-service-bg px-[100px] py-16 w-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">
            <h2 className="text-5xl text-gris-12 text-center font-medium">Tous Nos Services</h2>
            <div className="w-full flex flex-col items-center justify-start gap-8 max-md:gap-8">
                {
                    services.map((service, index) => (
                        <ServiceCard 
                            ref={el => {sercicesCardRef.current[index] = el}}
                            key={index} 
                            titre={service.titre} 
                            image={service.image} 
                        />
                    ))
                }                
            </div>
            <button
                className="cursor-pointer border border-transparent shadow-xl px-4 py-2 text-lg text-bleu-1 font-bold bg-bleu-9 rounded-full flex items-center justify-center transition duration-200 ease-in-out 
                hover:bg-transparent hover:border-bleu-9 hover:text-bleu-1 max-md:w-full"
            >
                charger plus de services
            </button>
        </section>
    )
}

export default BodyService
