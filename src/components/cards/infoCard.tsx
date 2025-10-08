"use client"
import { LucideIcon } from "lucide-react"

interface InfoCardProps {
    titre: string
    description: string
    Icon: LucideIcon
}

const InfoCard = ({titre, description, Icon}: InfoCardProps) => {
    return (
        <div className="border border-bleu-1/40 p-6 w-1/2 bg-gris-8/10 filter backdrop-blur-[35px] rounded-3xl flex flex-col items-start justify-start gap-4 max-lg:w-full">
            <div className="bg-bleu-9 size-10 aspect-square rounded-xl flex items-center justify-center">
                <Icon strokeWidth={1.5} className="size-6 stroke-gris-1" />
            </div>
            <span className="text-2xl text-gris-12 text-left font-semibold max-md:text-xl">{titre}</span>
            <p className="text-2xl text-gris-12 text-left font-normal max-xl:text-xl max-md:text-base">
                {description}
            </p>
        </div>
    )
}

export default InfoCard
