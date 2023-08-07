'use client'
import { shimmer, toBase64 } from "@/lib/blurURl";
import { Meal } from "@/mealstype";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import StarBorderIcon from '@mui/icons-material/StarBorder';
export default function SingleMeal({item}: {item : Meal}) {
    


    return ( 
        <motion.div className="font-medium hover:bg-[#EAEEF1] p-4 duration-200 rounded-md hover:-rotate-2 hover:scale-105" initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <Link href={`/Meals/${item.idMeal}`} className='grid gap-4 '>
                <Image placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} className='rounded-2xl object-cover' src={item.strMealThumb}   style={{width: '100%', height: '170px',}} width={500} height={200} alt='iamge'/>
                <div className="grid gap-2">
                    <h1 >{item.strMeal}</h1>
                    <div className="flex justify-between">
                        <div className="flex font-normal gap-1">
                            <StarBorderIcon/>
                            <h1 className="text-sm my-auto">4.7 (23)</h1>
                        </div>
                        <h1 className="text-secondary text-sm">by weka </h1>

                    </div>
                </div>
            </Link>
        </motion.div>
     );
}

