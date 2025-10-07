"use client"

import Image from "next/image"
import Link from "next/link"
import ServiceCard from "../cards/serviceCard"

const ServiceSection = () => {
    return (
        <section className="relative overflow-hidden bubble-bg px-[100px] py-16 w-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-md:py-8">
            <h2 className="text-5xl text-gris-12 text-center font-medium">Nos Services</h2>
            <div className="w-full flex flex-col items-center justify-start gap-8 max-md:gap-8">
                <ServiceCard titre="Développement web et mobile" image={"/service-img.jpg"} />                
                <ServiceCard titre="Audit et conception de réseau" image={"/service-img.jpg"} />                
                <ServiceCard titre="Maintenance informatique" image={"/service-img.jpg"} />                
            </div>
        </section>
    )
}

export default ServiceSection
