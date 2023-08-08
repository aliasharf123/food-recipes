import Image from "next/image"

import notFound from '../../../public/empty-folder.png'
export default function DataNotFound() {
    return ( 
    <div className="flex items-center flex-col gap-3 ">
        <Image src={notFound}  width={200} height={200} alt="s"/>
        <h1 className="font-semibold  text-lg">No results found</h1>
        <h1 className="text-secondary">It seems we can’t find any results based on your search.</h1>
    </div> 
    );
}

