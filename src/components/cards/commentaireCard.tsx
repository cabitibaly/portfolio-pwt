"use client"

import Image from "next/image"

const CommentaireCard = () => {
    return (
        <div className="border border-bleu-1/40 p-6 bg-bleu-9/10 backdrop-blur-[35px] rounded-xl w-full flex flex-col items-center justify-start gap-4">
            <p className="text-lg text-gris-12 text-left font-medium max-md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis ipsum rerum distinctio. 
                Voluptatum, at laboriosam!.                
            </p>
            <div className="w-full flex items-center justify-start gap-3">
                <div className="relative size-16 aspect-square rounded-full flex items-center justify-center">
                    <Image src={"/naruto.jpg"} fill alt="commentaire-img" className="size-full aspect-square rounded-full"/>
                </div>
                <div className="flex flex-col gap-0">
                    <span className="text-left text-lg text-gris-12 font-semibold max-md:text-base">Uzumaki</span>
                    <span className="text-left text-lg text-gris-12 font-semibold max-md:text-base">Naruto</span>
                </div>                
            </div>
        </div>
    )
}

export default CommentaireCard
