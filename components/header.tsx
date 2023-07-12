'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import DrawerContent from "./drawer";
import { Links } from "@/utils/data";
import {Abril_Fatface} from 'next/font/google'

const abril_Fatface = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })


export default function Header() {
    const pathname = usePathname()
    return (
         <nav className="pt-5 grid grid-cols-2 marginContent mb-6">
            <div className="flex justify-between gap-8">
                <Link href={`/`} className={`${abril_Fatface.className} text-xl lg:text-2xl my-auto `}>FoodWekaa</Link>
                <ul className="flex gap-10 mt-1 max-lg:hidden">
                    {(Links.slice(0 ,Links.length -1 )).map((value , index)=>(
                        <h1 className={`${!pathname.includes(value) &&"text-primaary"}  font-medium hover:text-black`} key={index}>{value}</h1>
                    ))}
                    <Link href={`/About`} className={`${!pathname.includes('About') &&"text-primaary"}  font-medium hover:text-black`}>About</Link>
                </ul>
            </div>
            <div className="justify-end flex gap-3 my-auto">
                <button className="btn-secondary tracking-tight">Login</button>
                <button className="btn-main ">Signup</button>
                <DrawerContent/>
            </div>
         </nav> 
    );
}

