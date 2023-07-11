import Image from 'next/image'
import logo from '@/public/Screenshot 2023-07-10 133502_auto_x2.jpg'
import Meals from '@/components/MealsSearch'
export default function Home() {
  return (
    <main className="marginContent  flex flex-col gap-10">
      <div className='bg-Theme rounded-3xl px-7 grid lg:grid-cols-2  '>
          <div className='flex flex-col gap-4 max-lg:mt-2  my-auto ml-5 max-lg:text-center lg:ml-10'>
            <h1 className='xl:text-6xl text-4xl font-medium'>Meal <br />Recipes</h1>
            <h1>Meal Recipes are like our big,<br /> constantly-in-progress dinner <br /> party-and you&lsquo;re invited</h1>
            <h1 className='font-medium'>How they work --</h1>
          </div>
          <Image src={logo} width={1300} height={1300} priority alt='chef' className='m-auto'/>
      </div>
      <Meals/>
    </main>
  )
}
