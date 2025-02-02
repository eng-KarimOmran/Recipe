import { useState } from "react"
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function CardRecipe(recipe) {
  const [ String , setString ] = useState()
  console.log()
  return (
    <div className="CardRecipe">
      <div className="img-CardRecipe">
        <img src={recipe.recipe.strMealThumb} alt="Bubble & Squeak" />
      </div>
      <h3>{recipe.recipe.strMeal.split(' ',2).join(' ')}</h3>
      {
        recipe.recipe.strArea === undefined ? '' : <span className="strArea"><BiWorld />{' ' + recipe.recipe.strArea}</span>
      }
      <Link to={`/recipe/${recipe.recipe.idMeal}`}><button>View Recipe</button></Link>
    </div>
  )
}