'use client'

import { Ingredient } from "@/mealstype";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/blurURl";

function Ingredient({value}:{value:Ingredient}){

   
    return (
        <div className="rounded-sm flex flex-col items-center hover:scale-105 hover:shadow-md duration-200 p-1 ">
            <Image placeholder="blur"  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} width={80}  height={80} alt={value.ingredient} src={`https://www.themealdb.com/images/ingredients/${value.ingredient}.png`}/>
            <h1>{value.ingredient}</h1>    
        </div>
    );
}

export default Ingredient;