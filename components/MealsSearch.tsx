import dynamic from "next/dynamic";
import Meals from "./meals";

const Mealsfilters = dynamic(() => import('./mealsfilters'))



export default function MealsSearch() {
    return ( 
        <div>
            <div className="lg:grid grid-cols-4 gap-20">
                <Mealsfilters/>
                <Meals/>
            </div>
        </div>
     );
}

