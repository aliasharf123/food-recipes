'use client'
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import mountains from '../../../public/pexels-alexy-almond-3758133.jpg'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Input({hasImage , value} : {hasImage : boolean , value? : string}) {
    const [searchMeal , setSearchMeal] = useState(value ? value : '')
    const router = useRouter()
    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault()
        router.push(`/search/${searchMeal}`)
    }
    return ( 
    <div className="flex justify-center flex-col  items-center">
       {hasImage ? <Image
            alt="Mountains"
            src={mountains}
            className="w-full max-h-96 max-md:max-h-72 object-cover  brightness-90"
        /> : <div className='bg-[#F3F3F4] w-full h-20'>{' '}</div>}
        <h1 className="absolute text-white font-semibold text-5xl max-md:text-3xl">Search Recipes</h1>
        <div className='mx-10  -translate-y-1/2 p-5 w-full flex justify-center'>
            <div className=' grid grid-cols-[30px_1fr] rounded-xl bg-white p-5  shadow max-w-[628px] w-full '>
                <SearchIcon className='text-secondary '/>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchMeal} onChange={(e)=>setSearchMeal(e.target.value) } className='bg-transparent my-auto outline-none' placeholder="Search recipes and more..."/>
                </form>
            </div>
        </div>
    </div>
     );
}