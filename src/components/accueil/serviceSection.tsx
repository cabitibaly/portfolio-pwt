"use client"
import { useRef } from "react"
import ServiceCard from "../cards/serviceCard"
import { useServiceCardAnimation } from "@/hooks/useServiceCardAnimation"
import { services } from "@/data/services"

const ServiceSection = () => {
    const sercicesCardRef = useRef<(HTMLDivElement | null)[]>([])

    useServiceCardAnimation({sercicesCardRef})

    return (
        <section className="relative overflow-hidden bubble-bg px-[100px] py-16 w-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">
            <h2 className="text-5xl text-gris-12 text-center font-medium">Nos Services</h2>
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
        </section>
    )
}

export default ServiceSection
