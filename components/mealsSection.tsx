import dynamic from "next/dynamic";
import { props } from "@/app/page";
import {Suspense} from 'react'
import Filters from "./seacrhInput";
import LoadingMeal from "./meals/loadingMeals";
// import Meals from './meals/mealsSection'

const Mealsfilters = dynamic(() => import('./filtersGategory/filters'))

const Meals = dynamic(() => import('./meals/mealsSection') , { // did loading when component first rerender 
    // loading: () => <LoadingMeal/>
    loading: () => <div>Loading....</div>   
})


export default function MealsSearch({searchParams}:props) {
    return ( 
        <div className="lg:grid grid-cols-4 gap-20">
            <Mealsfilters />
            <div className=' col-span-3 max-md:text-sm  '>
                <Filters/>
                {/* <Suspense fallback={<h1>Loading</h1>}> */}
                    <Meals searchParams={searchParams}/>
                {/* </Suspense> */}
            </div> 
        </div>
    );
}

