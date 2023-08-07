'use client'

import { categoryToEmoji } from '@/utils/categoryHandler';
import { categoryList } from '@/utils/categoryList';
import { ScrollArea } from '@mantine/core';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import {useRef, useState} from 'react'
import { useSearchParams } from 'next/navigation'
import SingleCategory from './singleCategory';
import { useMediaQuery } from '@mantine/hooks';


export default function MealsFilters() {
    const searchParams = useSearchParams()
    const viewport = useRef<HTMLDivElement>(null);
    const matches = useMediaQuery('(min-width: 1024px)');

    const scrollDown = () =>
    viewport.current?.scrollTo({ top: viewport.current.scrollTop + 70, behavior: 'smooth' });

    return ( 
    <div className="max-lg:flex flex-col max-lg:items-center ">
        <h1 className="lg:text-3xl font-semibold my-auto text-2xl  mb-10">Recipes 👨‍🍳</h1>
        <div className='flex flex-col gap-4'>
            <ScrollArea  viewportRef={viewport} type='never' w={ matches ? '100%' : "100vw" }  h={matches ? 450 : 100} >
                <div className='flex lg:flex-col gap-3 '>
                    {categoryList.map((item , index) =>(
                        <SingleCategory key={index} item={item} selectedItem={searchParams.get('category')}/>
                    ))}
                </div>
            </ScrollArea>
            <button className=' bg-[#F8F8F8] mx-auto px-3 hover:shadow-md border max-lg:hidden mb-4' onClick={scrollDown}><ArrowDropDownIcon/></button>
        </div>
    </div>
     );
}

