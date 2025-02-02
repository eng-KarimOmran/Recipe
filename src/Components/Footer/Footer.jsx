import { useState } from "react"
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
export default function Footer() {
  const [ String , setString ] = useState()
  return (
    <footer>
      <div className="container">
        <div className="head">
          <Link className="logo" to={'/'}>
            <img src={logo} alt="logo" />
            <h2>Recipe</h2>
          </Link>
          <span>Route</span>
        </div>
        <span>&copy; 2025 Karim Omran<sup>TM</sup>.All Rights Reserved.</span>
      </div>
    </footer>
  )
}
