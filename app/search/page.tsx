import MealsView from "@/components/meals/meals";
import Input from "./components/searchInput";
import { MealsResponse } from "@/mealstype";
import SearchMeal from "@/lib/searchMeal";

export default async function search() {
    const meals : MealsResponse = await SearchMeal(undefined)


    return ( 
        <div className="">
           <Input hasImage ={true}/>
           <div className="marginContent">
                <MealsView noOfCloumns={3} meals={meals}/>
           </div>
        </div> 
    );
}

