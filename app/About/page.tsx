
import {Abril_Fatface} from 'next/font/google'
import Image from 'next/image';
import image from '../../public/image_processing20211022-18092-1jb6wrx (2).jpg'

const abril_Fatface = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })


export default function About() {
    return ( 
        <div className="marginContent  rounded-lg  p-2">
            <h1 className={`lg:text-9xl text-center md:text-6xl text-5xl  font-medium ${abril_Fatface.className} my-auto`}>About Us</h1>  
          <div className='flex justify-center'>
            <Image width={500} alt='logo' src={image} height={500}/>
          </div>
        </div> 
    );
}

