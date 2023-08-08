
export default async function SearchMeal(name: string | undefined) {

    const url = name ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` : `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
    
    const res = await fetch( url  , {next: {revalidate:10}})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

