import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export default function HandleRouter() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  },[])
  return null
}
