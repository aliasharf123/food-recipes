
const link = (category : string) =>  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

export default async function getMeals(category: string | undefined) {

    const url = category ? link(category) : 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
    
    const res = await fetch(url , {next: {revalidate:10}})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

