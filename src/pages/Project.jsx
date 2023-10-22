import { Link, useParams } from "react-router-dom"
import { useFetchProjects } from "../fetchProjects"


const Project = () => {
  const {projects} = useFetchProjects()
  const {id} = useParams()

  const projectsContentful = projects.filter(project =>{
    return project.id === id
  })

 
  return (
    <div className="my-10">
      {projectsContentful.map(project=>{
        const {title, url, id, img, descriptions, video} = project
        return <div key={id}>
          <h1 className="text-xl md:text-5xl font-bold text-center my-20">{title}</h1>
          <video className="sm:max-w-xl m-auto mb-10 shadow card" src={video} autoPlay muted loop></video>
          <a className="link link-primary text-center mb-20 block" href={url} target="_blank">Check website</a>
          <h3 className="text-lg font-bold my-3">How did I create it?</h3>
          <p>{descriptions[0]}</p>

          <h3  className="text-lg font-bold my-3">What were the key design decisions?</h3>
          <p>{descriptions[1]}</p>

          <h3  className="text-lg font-bold my-3">What did I gain from this experience?</h3>
          <p>{descriptions[2]}</p>

          <h3  className="text-lg font-bold my-3">What would I enhance in the future?</h3>
          <p>{descriptions[3]}</p>
        </div>
      })}
      <Link className="btn btn-primary  m-auto my-10" to="/">Home</Link>
    </div>
  )
}

export default Project