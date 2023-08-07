'use client'
import { MealsResponse } from "@/mealstype";
import SingleMeal from "./singlemeal";
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

function MealsView({meals}: {meals:MealsResponse}) {
    const [numberOfMeals , setNumberOfMeals] = useState(6)
    return ( 
        <div className="flex justify-center flex-col">
            <div className='grid xl:grid-cols-3  sm:grid-cols-2 gap-10'>
                <AnimatePresence>
                   {meals && meals['meals'].slice(0,numberOfMeals).map((item,index) => (
                    <SingleMeal item={item} key={index}/>
                   ))}
                </AnimatePresence>
            </div>
            <div className='items-center mx-auto mt-5 flex gap-3' >
               {numberOfMeals < meals.meals.length && <motion.button onClick={() => setNumberOfMeals(numberOfMeals + 3)} whileHover={{scale:1.05 }} whileTap={{scale:0.98}} className='items-center bg-Theme px-4  font-medium rounded-md py-2 mx-auto mt-5'>Show more </motion.button>}
               {numberOfMeals > 6 && <motion.button onClick={() => setNumberOfMeals(numberOfMeals - 3)} whileHover={{scale:1.05 }} whileTap={{scale:0.98}} className='items-center bg-Theme px-4  font-medium rounded-md py-2 mx-auto mt-5'>Show less </motion.button>}
 
            </div>
        </div>
     );
}

export default MealsView;