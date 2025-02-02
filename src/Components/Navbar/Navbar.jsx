import { useState } from "react"
import logo from "../../assets/logo.png"
import { ImSpoonKnife } from "react-icons/im";
import { VscListFlat } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
export default function Navbar() {
  const [ ToggleNavbar , setToggleNavbar ] = useState(false)
  function toggleNav(e){
    if(e.target.tagName == 'NAV'){
      setToggleNavbar(!ToggleNavbar)
    }
  }
  function ck(p){
    if(p != 'ingredients' && p != 'area' ){
      return 'active'
    }else{
      return ''
    }
  }
  const Params = useParams()
  return (
    <nav onClick={(e)=>{toggleNav(e)}} className={ToggleNavbar === true ? 'toggle-Navbar' : ''}>
      <VscListFlat className="btn" onClick={()=>{setToggleNavbar(!ToggleNavbar)}} />
      <ul>
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
        <li><Link className={ck(Params['*'])} to={'/'}><ImSpoonKnife className="icon" />Meals</Link></li>
        <li><Link className={Params['*'] == 'ingredients' ? 'active' : ''} to={'/ingredients'}><ImSpoonKnife className="icon" />Ingredients</Link></li>
        <li><Link className={Params['*'] == 'area' ? 'active' : ''} to={'/area'}><ImSpoonKnife className="icon" />Area</Link></li>
      </ul>
    </nav>
  )
}
