import dynamic from "next/dynamic";
import Meals from "./meals/mealsSection.tsx";
import { props } from "@/app/page";

const Mealsfilters = dynamic(() => import('./filtersGategory/filters'))



export default function MealsSearch({searchParams}:props) {
    return ( 
        <div className="lg:grid grid-cols-4 gap-20">
            <Mealsfilters />
            <Meals searchParams={searchParams}/>
        </div>
    );
}

