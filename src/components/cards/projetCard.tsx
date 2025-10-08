import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjetCard = () => {
    return (
        <Link href={"/projets/1"} className='w-full flex flex-col items-center justify-center gap-4'>
            <div className='border border-bleu-1/40 p-2 w-full aspect-square rounded-2xl bg-gris-8/10 backdrop-blur-[35px] flex items-center justify-center'>
                <div className='relative w-full aspect-square rounded-lg'>
                    <Image src={"/projet-img.jpg"} fill alt='projet-img' className='size-full aspect-square rounded-lg'/>
                </div>                
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-2'>
                <span className='text-left text-2xl text-gris-1 font-medium'>Portolio Powertech</span>
                <p className='text-left text-base text-gris-6 font-normal line-clamp-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quod sed, dolorem dolor voluptas, 
                    fugit quae quasi beatae hic esse ipsa vel veritatis quam totam unde pariatur similique laboriosam minus.
                </p>
            </div>
        </Link>
    )
}

export default ProjetCard
