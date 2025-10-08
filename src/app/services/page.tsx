"use client"

import Navbar from "@/components/navigation/navbar"
import BodyService from "@/components/services/bodyService"
import HeroService from "@/components/services/heroService"

const Services = () => {
    return (
        <>
            <Navbar />
            <HeroService />
            <BodyService />
        </>
    )
}

export default Services
