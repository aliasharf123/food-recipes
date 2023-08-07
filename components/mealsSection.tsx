import dynamic from "next/dynamic";
import { props } from "@/app/page";
import Meals from "./meals/mealsSection";

const Mealsfilters = dynamic(() => import('./filtersGategory/filters'))



export default function MealsSearch({searchParams}:props) {
    return ( 
        <div className="lg:grid grid-cols-4 gap-20">
            <Mealsfilters />
            <Meals searchParams={searchParams}/>
        </div>
    );
}

