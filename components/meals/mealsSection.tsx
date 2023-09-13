import { props } from '@/app/page';
import getMeals from '@/lib/getMeals';
import {  MealsResponse } from '@/mealstype';
import MealsView from './meals';

export default async function Meals({searchParams}:props) {
    const meals : MealsResponse = await getMeals(searchParams?.category)

    return ( 
            <MealsView noOfCloumns={3} meals={meals}/>
     );
}

