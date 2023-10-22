import Hero from "../components/Hero"
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutComponent from "../components/AboutComponent";
import Toolkit from "../components/Toolkit";
import Contact from "../components/Contact";


export const loader = async ()=> {
  const response = await axios.get('https://cdn.contentful.com/spaces/t0ys7f1vxvt2/environments/master/entries', {
      params: {
        access_token: '5ymX5u0JSZ0u0WgH3FLMpuudFOpnlVrWokqcGBCnFLE',
        content_type: 'portfolio',
      },
    });


    return {projects: response.data.items}
}


const Landing = () => {
  const {projects} =useLoaderData()
  return (
    <div>
    <Hero />
    <FeaturedProjects projects={projects} />
    <AboutComponent />
    <Toolkit />
    <Contact />
    </div>
  )
}

export default Landing