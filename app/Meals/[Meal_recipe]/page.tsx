import { extractIngredients } from "@/lib/extractIngridens";
import getSingleMeal from "@/lib/getSingleMeal";
import { Meal, MealsResponse } from "@/mealstype";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Ingredient = dynamic(() => import('../[Meal_recipe]/components/ingredient'))

const Detail = ['Country' , 'Category']

export async function generateMetadata({
  params: { Meal_recipe },
}: {
  params: { Meal_recipe: string }
}) {
  const MealResponce : MealsResponse =  await getSingleMeal(Meal_recipe)
  const Meal : Meal = MealResponce.meals[0]
  return {
    title: Meal.strMeal,
  }
}


export default async function SingleMeal({
    params: { Meal_recipe },
  }: {
    params: { Meal_recipe: string }
  }) {
    const MealResponce : MealsResponse =  await getSingleMeal(Meal_recipe)
    const Meal : Meal = MealResponce.meals[0]


    return ( 
      <div className="marginContent">
        <div className="flex gap-4 font-medium mb-5 ">
          <Link href={'/'}>Home  </Link> &gt; 
          <Link href={'/search'}>Resipes  </Link> &gt; 
          <Link href={`/Meals/${Meal.idMeal}`} >
            <h1>{Meal.strMeal}</h1></Link>
        </div>
        <div className="md:grid md:grid-cols-2 max-md:flex max-md:flex-col gap-20">
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
            <h1 className="text-lg font-medium  ">Ingredients</h1>

            <div className="grid grid-cols-3  gap-4">
              {extractIngredients(Meal).map((value , index)=> 
             <Ingredient key={index} value={value}/>
             )}
            </div>
          </div>
          <div className=" md:p-3 	max-md:order-first h-fit">
              <Image src={Meal.strMealThumb} className="w-full rounded-xl shadow-lg " width={500} height={400} alt="manin" priority/>
          </div>
        </div>
      </div>
    );
}

