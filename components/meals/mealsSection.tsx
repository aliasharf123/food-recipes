import { props } from '@/app/page';
import getMeals from '@/lib/getMeals';
import {  MealsResponse } from '@/mealstype';
import dynamic from 'next/dynamic';

const Filters = dynamic(() => import('../seacrhInput'))
const MealsView = dynamic(() => import('./meals'))


export default async function Meals({searchParams}:props) {
    const meals : MealsResponse = await getMeals(searchParams?.category)

    return ( 
        <div className=' col-span-3 max-md:text-sm  '>
            <Filters/>
            <MealsView meals={meals}/>
        </div> 
     );
}

