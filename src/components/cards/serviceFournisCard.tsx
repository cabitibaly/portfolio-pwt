"use client"
import { forwardRef } from "react"

const ServiceFournisCard = forwardRef<HTMLDivElement, {nomService: string}>(
    ({nomService}, ref) => {
        return (
            <div ref={ref} className="scale-0 shadow-xl bg-bleu-1/10 backdrop-blur-[35px] rounded-full px-3 py-1.5 flex items-center justify-center">
                <span className="text-lg text-gris-1 text-center font-bold">{nomService}</span>
            </div>
        )
    }
)

export default ServiceFournisCard
