import { useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
export default function NotFound() {
  const [ String , setString ] = useState()
  return (
    <section>.
      <div className="not-found">
        <img src={logo} alt="logo" />
        <div className="box-found">
        <span className="f-404">404</span>
        <span className="error">error</span>
        <p>page not found</p>
        <Link className="back-to" to={'/'}><span>back to category</span></Link>
        </div>
      </div>
    </section>
  )
}
