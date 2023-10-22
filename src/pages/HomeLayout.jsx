import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"




const HomeLayout = () => {
  return (<>
    <Navbar />
    <div className="align-element">
    <Outlet />
    </div>
    </>  )
}

export default HomeLayout