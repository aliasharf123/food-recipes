import getMeals from '@/lib/getMeals';
import { Meal, MealsResponse } from '@/mealstype';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Filters = dynamic(() => import('./filters'))


export default async function Meals() {
    const meals : MealsResponse = await getMeals()

    
    return ( 
        <div className=' col-span-3 max-md:text-sm '>
            <Filters/>
            <div className='grid xl:grid-cols-3  sm:grid-cols-2 gap-16'>
               {meals && meals['meals'].map((item,index) => (
                <Link href={`/Meals/${item.idMeal}`} key={index} className='grid gap-4 '>
                    <Image className='rounded-2xl object-cover' src={item.strMealThumb}   style={{width: '100%', height: '200px',}} width={500} height={200} alt='iamge'/>
                    <h1 className='text-lg font-medium'>{item.strMeal}</h1>
                </Link>
               ))}
        
            </div>
        </div> 
     );
}

