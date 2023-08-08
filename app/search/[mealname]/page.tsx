import SearchMeal from "@/lib/searchMeal";
import Input from "../components/searchInput";
import MealsView from "@/components/meals/meals";
import { MealsResponse } from "@/mealstype";

export default async function page({ params }: { params: { mealname: string } }) {
    const meals : MealsResponse = await SearchMeal(params.mealname)
    

    return ( 
        <div>
            <Input value={params.mealname} hasImage={false}/>
            <div className="flex flex-col items-center mb-5">
                <h1 className="text-xl md:text-3xl  font-semibold -translate-y-1/2">{params.mealname}</h1>
                <h1 className="font-medium text-secondary">Find {meals.meals ?meals.meals.length :0} recipe</h1>
            </div>
            <div className="marginContent">
                <MealsView noOfCloumns={3} meals={meals}/>
            </div>
        </div> 
    );
}

