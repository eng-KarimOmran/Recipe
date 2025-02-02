import { useState } from "react"
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [ String , setString ] = useState()
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
