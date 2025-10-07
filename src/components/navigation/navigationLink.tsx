"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItems {
    name: string
    href: string
}

const NavigationLink = ({ name, href }: NavItems) => {
    const pathname = usePathname();

    return (
        <li>
            <Link href={href} className={`text-xl transition duration-200 ease-out hover:text-bleu-9 max-896:text-lg max-md:hidden ${pathname === href ? "text-bleu-9 font-bold" : "text-gris-12 font-semibold"}`}>
                {name}
            </Link>
            <Link href={href} className={`text-5xl font-normal transition duration-200 ease-out hover:text-bleu-9 hidden max-md:block ${pathname === href ? "text-bleu-9" : "text-gris-12"}`}>
                {name}
            </Link>
        </li>
    )
}

export default NavigationLink
