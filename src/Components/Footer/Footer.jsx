import logo from '../../../public/logo.png'
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="head">
          <Link className="logo" to={'/'}>
            <img src={logo} alt="logo" />
            <h2>Recipe</h2>
          </Link>
        </div>
        <span>&copy; 2024 <a href="https://karim-abdelhalim-tau.vercel.app/">Karim Abdelhalim</a> .All Rights Reserved</span>
      </div>
    </footer>
  )
}
