import { useEffect, useState } from "react"
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useParams } from "react-router-dom";
import axios from "axios";
import LodingDetails from "../LodingDetails/LodingDetails";
export default function RecipeDetails() {
  const [ Details , setDetails ] = useState([])
  const [ Ingredients , setIngredients ] = useState([])
  const params = useParams()
  useEffect((()=>{
    getDetails(params.id)
  }),[params.id])
  async function getDetails(p){
    try{
      let arryOfIngredients = []
      const dataDetails = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${p}`)
      for(let i = 1 ; i < 21 ; i++){
        if(dataDetails.data.meals[0][`strIngredient${i}`] == ''){
          break;
        }
        arryOfIngredients.push(dataDetails.data.meals[0][`strIngredient${i}`] + ';' + dataDetails.data.meals[0][`strMeasure${i}`])
      }
      setIngredients(arryOfIngredients)
      setDetails(dataDetails.data.meals)
    }
    catch(e){
      console.log(e)
    }
  }
  return (Details.length == 0 ? <LodingDetails /> : 
  <section>
    <div className="RecipeDetails">
      <h2>{Details[0].strMeal}</h2>
      <div className="Box-Details">
        <div className="Box-img">
          <img src={Details[0].strMealThumb} alt="img" />
          <div>
            <a href={Details[0].strYoutube} target="_blank" className="youtube"><FaYoutube /> youtube</a>
            <a href={Details[0].strSource} target="_blank" className="source"><TbWorld /> source</a>
          </div>
        </div>
        <ul className="step">
          {Details[0].strInstructions}
        </ul>
        <ul className="ingredients">
          <div>Ingredients</div>
          {
            Ingredients.map((Ingredient)=>(
              <li key={Ingredient}>
                <span>{Ingredient.split(';')[0]}</span>
                <span>{Ingredient.split(';')[1]}</span>
              </li>
             ))
          }
        </ul>
      </div>
    </div>
  </section>
)}
