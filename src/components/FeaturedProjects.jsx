import { Link } from "react-router-dom"
import { useFetchProjects } from "../fetchProjects"


const FeaturedProjects = () => {

  const {projects} = useFetchProjects()

    
  return (
    <section className="my-10">
    <h1 className="mb-20 text-secondary">Click on any project to learn more.</h1>

    <div className="grid-element">
    {projects.map(project =>{
     const {title, id, img, url} = project
     return <div key={id} className="mockup-browser border bg-base-300 ">
              <div className="mockup-browser-toolbar">
                <div className="input">{url}</div>
              </div>
              <div ><Link to={`/${id}`}>
                <img className="object-cover block w-[100%]" src={img} alt="project" />
                </Link>
              </div>
              <p className="font-bold text-lg text-center text-primary my-2">{title}</p>
   </div>

    })}
    
    </div>
    </section>
  )
}

export default FeaturedProjects