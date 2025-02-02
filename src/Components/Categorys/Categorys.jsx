import { useEffect, useState } from "react"
import Category from "../Category/Category"
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import CardRecipe from "../CardRecipe/CardRecipe";
import { useParams } from "react-router-dom";
import LodingCategorys from "../LodingCategorys/LodingCategorys";
export default function Categorys() {
  const [ ToogleDropdown , setToogleDropdown ] = useState(true)
  const [ dataCategorys , setDataCategorys ] = useState([])
  const [ dataRecipe , setDataRecipe ] = useState([])
  const arryOFloding = ['lod_0','lod_1','lod_2','lod_3','lod_4','lod_5','lod_6','lod_7','lod_8']
  const param = useParams()
  async function getCategorys(){
    try{
      const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setDataCategorys(data.data.categories)
    }
    catch(e){
      console.log(e)
    }
  }
  async function getRecipe(prm) {
    if(prm === undefined){
      prm = 'search.php?s='
    }
    try{
      prm == 'search.php?s=' ? '' : prm = 'filter.php?c=' + prm
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/${prm}`)
      setDataRecipe(data.data.meals)
    }catch(e){
      console.log(e)
    }
  }
  useEffect((()=>{getCategorys()}),[])
  useEffect(()=>{
    setToogleDropdown(!ToogleDropdown)
    getRecipe(param.id)
  },[param.id])
  return (
    <section>
      <div className="Categorys">
        <h2>Learn, Cook, Eat Your Food</h2>
        <div className={`display-categorys ${ToogleDropdown ? 'open-display-categorys' : ''}`}>
          <div onClick={()=>{setToogleDropdown(!ToogleDropdown)}} className="ArrowDropdown">
            <IoMdArrowDropdown className="ArrowDrop" />
          </div>
          <Category to={`/`} text={`All`} />
          {dataCategorys.length == 0 ? '' : dataCategorys.map((category)=>(
            <Category key={category.idCategory} to={`/categorys/${category.strCategory}`} text={`${category.strCategory}`} />
          ))}
        </div>
        <div className="display-Recipe">
          {
            dataRecipe.length == 0 ? arryOFloding.map((num)=>(<LodingCategorys key={num} />)) : dataRecipe.map((recipe)=>(<CardRecipe key={recipe.idMeal} recipe={recipe} />))
          }
        </div>
      </div>
    </section>
  )
}