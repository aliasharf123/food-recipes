import { props } from '@/app/page';
import getMeals from '@/lib/getMeals';
import {  MealsResponse } from '@/mealstype';
import dynamic from 'next/dynamic';
import AnimatedCircles from '../loading';

const Filters = dynamic(() => import('../seacrhInput'))
const MealsView = dynamic(() => import('./meals') , {
    loading: () =>  <div className="flex align-middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: 'rgb(255, 255, 255)',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="50" cy="50" r="0" fill="none" stroke="#e90c59" strokeWidth="2">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="0s"
        />
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="0s"
        />
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#46dff0" strokeWidth="2">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="-0.5s"
        />
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="1s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="-0.5s"
        />
      </circle>
    </svg>
  </div>
})


export default async function Meals({searchParams}:props) {
    const meals : MealsResponse = await getMeals(searchParams?.category)

    return ( 
        <div className=' col-span-3 max-md:text-sm  '>
            <Filters/>
            <MealsView noOfCloumns={3} meals={meals}/>
        </div> 
     );
}

