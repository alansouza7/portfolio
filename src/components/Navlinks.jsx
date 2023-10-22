import { NavLink } from "react-router-dom"

const links = [
    {id:1, url: "/", text: "home"},
    {id:2, url: "about", text: "about"},
    {id:3, url: "projects", text: "projects"},
    
]

const Navlinks = () => {
  return <>
  {links.map(link=>{
    const {id, url, text} = link
    return <li className="list-none" key={id}>
        <NavLink className="btn btn-ghost" to={url}>{text}</NavLink>
    </li>
  })}
  </>
}

export default Navlinks