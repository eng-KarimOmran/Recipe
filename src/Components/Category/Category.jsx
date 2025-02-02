import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Category({to,text}) {
  const [ String , setString ] = useState()
  return (
    <NavLink className="Category" to={to}>{text}</NavLink> 
  )
}