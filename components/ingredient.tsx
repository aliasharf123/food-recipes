'use client'

import { Ingredient } from "@/mealstype";
import Image from "next/image";
import nopicture from '../public/image_processing20211022-18092-1jb6wrx.jpg'
import Loading from '../public/__Iphone-spinner-1.gif'

function Ingredient({value}:{value:Ingredient}){

   const blurHash = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
    return (
        <div className="rounded-sm flex flex-col items-center hover:scale-105 hover:shadow-md duration-200 p-1 ">
            <Image placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${blurHash}`} width={80}  height={80} alt={value.ingredient} src={`https://www.themealdb.com/images/ingredients/${value.ingredient}.png`}/>
            <h1>{value.ingredient}</h1>
            
        </div>
    );
}

export default Ingredient;