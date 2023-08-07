import { categoryToEmoji } from '@/utils/categoryHandler';
import { categoryList } from '@/utils/categoryList';
import Link from 'next/link';

interface props {
    item: typeof categoryList[0],
    selectedItem: string | null
}

export default function SingleCategory({item, selectedItem}: props) {
    const isSelected = selectedItem === item.strCategory
    const style = isSelected ?  'bg-selectedGategory text-white shadow-lg ': 'border'
    return ( 
        <Link href={ isSelected ? `/` : `/?category=${item.strCategory}`}  className={'p-2 flex justify-between rounded-full hover:shadow-md duration-200 h-full '+ style}>
            <h1 className='flex gap-2 items-center font-medium'> <span className='bg-[#F8F8F8] p-1 text-lg rounded-full'>{categoryToEmoji(item.strCategory)}</span> {item.strCategory}</h1> 
            {isSelected&&<h1 className='my-auto text-white font-semibold  p-1 text-lg rounded-full px-3'>x</h1>}
        </Link>
     );

}

