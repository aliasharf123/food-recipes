import { props } from "@/app/page";
import { MealsResponse } from "@/mealstype";
import getMeals from "@/lib/getMeals";
import MealsView from "./meals/meals";

export default async function MealsSearch({ searchParams }: props) {
  const meals: MealsResponse = await getMeals(searchParams?.category);
  return <MealsView noOfCloumns={3} meals={meals} />;
}
