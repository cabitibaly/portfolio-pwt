import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export const useServiceCardAnimation = ({sercicesCardRef}: {sercicesCardRef: React.RefObject<(HTMLDivElement | null)[]>}) => {
    
    useEffect(() => {
        const servicesCards = sercicesCardRef.current

        if (!servicesCards) return

        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

        servicesCards.forEach((card, index) => {
            if (!card) return

            gsap.fromTo(
                card,
                {scale: 0, opacity: 0, transformOrigin: "center center"},
                {
                    scale: 1, 
                    opacity: 1, 
                    transformOrigin: "center center", 
                    delay: index * 0.2,
                    duration: 0.8, 
                    ease: "power2.inOut",  
                    stagger: 0.2,                  
                    scrollTrigger: {
                        trigger: card,
                        start: "top 75%",
                        toggleActions: "play none none reverse",                        
                    }
                }
            )
        })

        return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    }, [])
}