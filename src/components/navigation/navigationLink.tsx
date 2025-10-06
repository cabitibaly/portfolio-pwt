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
            <Link href={href} className={`text-xl transition duration-200 ease-out hover:text-bleu-9 max-896:text-lg ${pathname === href ? "text-bleu-9 font-bold" : "text-gris-12 font-semibold"}`}>
                {name}
            </Link>
        </li>
    )
}

export default NavigationLink
