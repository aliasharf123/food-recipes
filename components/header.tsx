'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import DrawerContent from "./drawer";
import SearchIcon from '@mui/icons-material/Search';
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
         <nav className="pt-5 grid grid-cols-2 marginContent">
            <div className="flex justify-between gap-8">
                <Link href={`/`} className={`${abril_Fatface.className} text-xl lg:text-2xl my-auto`}>FoodWekaa</Link>
                <ul className="flex gap-10 mt-1 max-lg:hidden">
                    {Links.map((value , index)=>(
                        <Link href={`/${value}`} className={`${!pathname.includes(value) &&"text-primaary"}  font-medium`} key={index}>{value}</Link>
                    ))}
                    <button className=" flex  ">
                        <SearchIcon />
                    </button>
                </ul>
            </div>
            <div className="justify-end flex gap-3 my-auto">
                <button className=" flex  lg:hidden my-auto">
                    <SearchIcon />
                </button>
                <button className="btn-secondary tracking-tight">Login</button>
                <button className="btn-main ">Signup</button>
                <DrawerContent/>
            </div>
         </nav> 
    );
}

