import Link from "next/link";
import {Abril_Fatface} from 'next/font/google'
import SocialIconsClient from "./SocialIconsClient";

const products = [
    {
        name : 'Product',
        values: ['Overview','About us','Blog','Features','Careers','Newsletter']
    },
    {
        name : 'Company',
        values: ['Solutions','Press','Events','Tutorials','News','Help centre']
    },
    {
        name : 'Resources',
        values: ['Pricing','Media kit','Tutorials','Releases','Contact','Support']
    }
]

const abril_Fatface = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  }) 

export default function Footer() {
    return ( 
    <div className=" marginContent py-10 grid  gap-14 border-t-2 mt-10">
        <div className="grid md:grid-cols-2 gap-14">
            <div className="flex flex-col gap-2">
                <Link href={`/`} className={`${abril_Fatface.className} text-xl lg:text-2xl `}>FoodWekaa</Link>
                <SocialIconsClient/>
            </div>
            <div className="grid md:grid-cols-3 my-auto font-medium grid-cols-2 gap-2">
                {products.map((value , index)=>(
                    <div key={index}>
                    <h1 className="text-primaary mb-2">{value.name}</h1> 
                    <div className="flex flex-col gap-1">
                            {value.values.map((item , index)=>(
                                <h1 key={index}>{item}</h1>
                            ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
        <div  className="grid md:grid-cols-2">
            <h1 className="text-primaary"> <span className="font-semibold text-black text-lg">Cooking good with Foodwekaa</span>  <br /> Save countless hours of design and ship great looking designs faster.</h1> 
            <h1 className="my-auto text-end text-primaary font-medium text-sm">ⓒ 2077 Foodwekaa. All rights reserved.</h1>
        </div>
    </div> 
    );
}

