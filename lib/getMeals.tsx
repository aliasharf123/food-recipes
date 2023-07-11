export default async function getMeals() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast' , {next: {revalidate:10}})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

