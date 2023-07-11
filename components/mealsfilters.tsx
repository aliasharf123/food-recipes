'use client'

import { mealsData } from "@/utils/mealsFilters";
import AddIcon from '@mui/icons-material/Add';
export default function MealsFilters() {
    return ( 
    <div className="max-lg:flex flex-col max-lg:items-center ">
        <h1 className="lg:text-3xl font-semibold my-auto text-2xl  mb-10">Recipes 👨‍🍳</h1>
        <div className="flex lg:flex-col gap-4">
            <div className=" flex justify-between">
                <h1 className="text-filtrs">Filter by</h1>
                <h1 className="text-error">Clear Filters</h1>
            </div>
            <div className=" grid gap-4">
                {Object.keys(mealsData).map((item , index)=>(
                    <button key={index} className="text-filtrs flex justify-between ">
                        <h1 className="text-start "> {item} </h1>
                        <AddIcon className=""/>
                    </button> 
                ))}
            </div>
        </div>
    </div>
     );
}

