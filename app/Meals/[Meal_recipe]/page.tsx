import { extractIngredients } from "@/lib/extractIngridens";
import getSingleMeal from "@/lib/getSingleMeal";
import { Meal, MealsResponse } from "@/mealstype";
import Image from "next/image";
import Link from "next/link";

const Detail = ['Country' , 'Category']
export default async function SingleMeal({
    params: { Meal_recipe },
  }: {
    params: { Meal_recipe: string }
  }) {
    const MealResponce : MealsResponse =  await getSingleMeal(Meal_recipe)
    const Meal : Meal = MealResponce.meals[0]
    return ( 
      <div className="marginContent">
        <div className="flex gap-4 font-medium mb-5">
          <Link href={'/'}>Home  </Link> &gt; 
          <Link href={'/Meals'}>Meals  </Link>&gt;
          <Link href={`/Meals/${Meal.idMeal}`}>{Meal.strMeal}</Link>

        </div>
        <div className="grid md:grid-cols-2 gap-20">
          <Image src={"https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg"} className="w-full " width={500} height={300} alt="manin" priority/>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-ellipsis">{Meal.strMeal}</h1>
            <div className="grid grid-cols-2 ">
              {Detail.map((item , index) =>{
                let value = item ==='Country' ? Meal.strCategory :  Meal.strArea
                return(
                  <div  key={index}>
                    <h1 className="font-semibold">{value}</h1>
                    <h1 className="text-primaary">{item}</h1>
                  </div>
                )
              })}
            </div>
            <h1 className="text-lg font-medium">Ingredients</h1>
            <div className="flex-wrap flex gap-4">
              {extractIngredients(Meal).map((value , index)=> <div key={index}>{value.ingredient}</div>)}
            </div>
          </div>
        </div>
      </div>
    );
}

