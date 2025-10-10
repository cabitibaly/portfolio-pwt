"use client"

import { Goal, Rose, UsersRound } from "lucide-react"
import InfoCard from "../cards/infoCard"
import CallToAction from "../cards/callToAction"

const ProcessSection = () => {
    return (
        <>
            <section className="overflow-hidden sticky top-0 py-16 bg-bleu-2 w-screen h-screen flex flex-col items-center justify-start">
                <h2 className="text-5xl text-gris-12 text-center font-medium">Notre process</h2>
                <div className="relative top-0 z-0 w-full h-full flex items-center justify-center">
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <div className="animate-blob absolute left-1/12 translate-x-1/2 w-1/3 aspect-square rounded-full bg-bleu-9 filter blur-[20px] max-lg:w-2/5 max-lg:-left-[6%] max-md:translate-none max-md:left-0 max-md:w-2/3"></div>
                        <div className="animate-blob delay-300 absolute right-1/12 -translate-x-1/2 w-1/3 aspect-square rounded-full bg-vert-9 filter blur-[20px] max-lg:w-2/5 max-lg:-right-[6%] max-md:translate-none max-md:right-0 max-md:w-2/3"></div>
                        <div className="animate-blob delay-800 absolute bottom-[6%] w-1/3 aspect-square rounded-full bg-jaune filter blur-[20px] max-md:bottom-[10%] max-lg:w-2/5 max-md:w-2/3 max-xs:bottom-1/5"></div>
                    </div>                
                </div>            
            </section>
            <div className="px-[100px] py-16 relative z-30 top-0 left-0 w-screen min-h-screen flex flex-col items-center justify-start gap-12 max-896:px-4 max-896:py-8">                                
                <div className="w-full flex flex-col items-center justify-start gap-10">
                    <div className="w-full flex items-center justify-between gap-8 max-lg:flex-col">
                        <InfoCard 
                            titre="Nos valeurs"
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci maxime suscipit, animi dicta eaque 
                            ullam aspernatur consequatur est odit recusandae. Ipsum itaque consequatur officiis! Voluptatem dolor 
                            modi earum cumque itaque."
                            Icon={Rose}
                        />                        
                        <InfoCard 
                            titre="Nos missions"
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci maxime suscipit, animi dicta eaque 
                            ullam aspernatur consequatur est odit recusandae. Ipsum itaque consequatur officiis! Voluptatem dolor 
                            modi earum cumque itaque."
                            Icon={Goal}
                        />                        
                    </div>
                    <InfoCard 
                        titre="Notre équipe"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci maxime suscipit, animi dicta eaque 
                        ullam aspernatur consequatur est odit recusandae. Ipsum itaque consequatur officiis! Voluptatem dolor 
                        modi earum cumque itaque."
                        Icon={UsersRound}
                    />
                </div>
                <CallToAction />
            </div>
        </>
    )
}

export default ProcessSection
