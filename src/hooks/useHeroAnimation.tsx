import gsap from "gsap"
import { useEffect } from "react"

interface HeroAnimation {
    heroTextRef: React.RefObject<HTMLDivElement | null>
    contactLinkRef: React.RefObject<HTMLAnchorElement | null>
    projetsLinkRef: React.RefObject<HTMLAnchorElement | null>
}

export const useHeroAnimation = ({heroTextRef, contactLinkRef, projetsLinkRef}: HeroAnimation) => {

    useEffect(() => {
        const heroText = heroTextRef.current
        const contactLink = contactLinkRef.current
        const projetsLink = projetsLinkRef.current

        if (!heroText || !contactLink || !projetsLink) return

        const tl = gsap.timeline()

        tl.to(
            heroText,             
            {scale: 1, transformOrigin: "center center", delay: 1, duration: 1, ease: "power2.inOut"}
        ).to(
            contactLink,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        ).to(
            projetsLink,
            {scale: 1, transformOrigin: "center center", duration: 0.5, ease: "power2.inOut"}
        )

    }, [heroTextRef, contactLinkRef, projetsLinkRef])

}