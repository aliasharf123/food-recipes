'use client'

import { Ingredient } from "@/mealstype";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/blurURl";

function Ingredient({value}:{value:Ingredient}){
    return (
        <div className="flex flex-col items-center shadow-md hover:scale-105 duration-200 p-1 rounded-md font-medium">
            <Image placeholder="blur"  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} width={80}  height={80} alt={value.ingredient} src={`https://www.themealdb.com/images/ingredients/${value.ingredient}.png`}/>
            <h1 >{value.ingredient}</h1>  
            <h1 className="text-secondary text-sm">{value.measure}</h1> 
        </div>
    );
}

export default Ingredient;