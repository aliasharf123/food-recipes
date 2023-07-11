import getMeals from '@/lib/getMeals';
import { Meal, MealsResponse } from '@/mealstype';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Filters = dynamic(() => import('./filters'))


export default async function Meals() {
    const meals : MealsResponse = {
        "meals": [
            {
                "strMeal": "Chick-Fil-A Sandwich",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
                "idMeal": "53016"
            },
            {
                "strMeal": "Chicken Couscous",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
                "idMeal": "52850"
            },
            {
                "strMeal": "Chicken Fajita Mac and Cheese",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
                "idMeal": "52818"
            },
            {
                "strMeal": "Chicken Ham and Leek Pie",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
                "idMeal": "52875"
            },
            {
                "strMeal": "Chicken Quinoa Greek Salad",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
                "idMeal": "53011"
            },
            {
                "strMeal": "General Tso's Chicken",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/1529444113.jpg",
                "idMeal": "52951"
            },
            {
                "strMeal": "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
                "idMeal": "52993"
            },
            {
                "strMeal": "Katsu Chicken curry",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
                "idMeal": "52820"
            },
            {
                "strMeal": "Rappie Pie",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
                "idMeal": "52933"
            }
        ]
    }

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

