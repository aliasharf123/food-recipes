'use client'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function Filters() {
    const router = useRouter()
    const [searchMeal , setSearchMeal] = useState('')
    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault()
        router.push(`/search/${searchMeal}`)
    }
    return ( 
        <div className=' lg:grid grid-cols-4 gap-6 xl:gap-16 lg:gap-10 max-sm:gap-0  mb-10 '>
            <div className='bg-[#F8F8F8] p-3 rounded-xl col-span-3 border-2 border-transparent duration-200 focus-within:border-black grid grid-cols-[30px_1fr] '>
                <SearchIcon/>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchMeal} onChange={(e)=>setSearchMeal(e.target.value) } className='bg-transparent my-auto outline-none' placeholder="Search recipes and more..."/>
                </form>
            </div>
            <button className='btn-main my-auto max-lg:hidden col-start-4'>
                <h1 className='flex gap-2 justify-center'>A to Z <KeyboardArrowDownIcon/></h1> 
            </button>
        </div>
    );
}

