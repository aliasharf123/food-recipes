

export default async function getSingleMeal(mealId:string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}` , {next: {revalidate:10}})
 
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

