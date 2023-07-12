'use client'

import { extractIngredients } from "@/lib/extractIngridens";
import getSingleMeal from "@/lib/getSingleMeal";
import { Meal, MealsResponse } from "@/mealstype";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal } from 'antd';
import { useRouter } from 'next/navigation'

const Detail = ['Country' , 'Category']



export default function ModelFood({Meal}: {Meal : Meal}) {
    const router = useRouter()


    const onClose = () =>{
        router.back()
    }
    return ( 
        <Modal title="Basic Modal" open={true} onCancel={onClose}>
            {Meal.strArea}
        </Modal>
     );
}

