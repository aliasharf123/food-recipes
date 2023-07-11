'use client'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Meals from './meals';
export default function Filters() {
    return ( 
        <div className=' lg:grid grid-cols-4 gap-6 xl:gap-16 lg:gap-10 max-sm:gap-0  mb-10 '>
            <div className='bg-[#F8F8F8] p-3 rounded-xl col-span-3 '>
                <SearchIcon  />
                <input type="text" className='bg-transparent my-auto' placeholder="Search recipes and more..."/>
            </div>
            <button className='btn-main my-auto max-lg:hidden '>
                <h1 className='flex gap-2 justify-center'><span className='font-normal max-xl:hidden'>Sort by:</span> A to Z <KeyboardArrowDownIcon/></h1> 
            </button>
        </div>
    );
}

