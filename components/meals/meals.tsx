'use client'
import { MealsResponse } from "@/mealstype";
import SingleMeal from "./singlemeal";
import { AnimatePresence, motion } from "framer-motion"
import {useState } from "react";
import DataNotFound from "@/app/search/components/noDataFound";

function MealsView({meals ,noOfCloumns}: {meals:MealsResponse , noOfCloumns: number}) {
    const [numberOfMeals , setNumberOfMeals] = useState(noOfCloumns * 2)
    

    if(!meals['meals']) {
        return <DataNotFound/>
    }
    return ( 
            <div className="flex justify-center flex-col" >
                <div className={`grid gap-10 xl:grid-cols-3 sm:grid-cols-2 `}  >
                    <AnimatePresence>
                    {meals && meals['meals'].slice(0,numberOfMeals).map((item,index) => (
                        <SingleMeal item={item} key={index}/>
                    )) }
                    </AnimatePresence>
                </div>
                <div className='items-center mx-auto mt-5 flex gap-3' >
                {numberOfMeals < meals.meals.length && <motion.button onClick={() => setNumberOfMeals(numberOfMeals + noOfCloumns)} whileHover={{scale:1.05 }} whileTap={{scale:0.98}} className='items-center bg-Theme px-4  font-medium rounded-sm py-2 mx-auto mt-5'>Show more </motion.button>}
                {numberOfMeals > noOfCloumns * 2 && <motion.button onClick={() => setNumberOfMeals(numberOfMeals - noOfCloumns)} whileHover={{scale:1.05 }} whileTap={{scale:0.98}} className='items-center bg-Theme px-4  font-medium rounded-sm py-2 mx-auto mt-5'>Show less </motion.button>}
                </div>
            </div>
     );
}

export default MealsView;