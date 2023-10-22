import { useEffect, useState } from "react";
import { createClient } from 'contentful'

const client = createClient({
  space: "t0ys7f1vxvt2",
  environment: "master",
  accessToken: "5ymX5u0JSZ0u0WgH3FLMpuudFOpnlVrWokqcGBCnFLE"
});

export const useFetchProjects = () =>{
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const getData = async () =>{
    try {
      const response = await client.getEntries({ content_type: "projects" });
      setIsLoading(false);

      const projects = response.items.map(item=>{
       
        const {title, url, image, description1, description2, description3, description4, gif} = item.fields
        const id = item.sys.id 
        const img = image?.fields?.file?.url
        const video = gif?.fields.file.url
        const descriptions = [description1, description2, description3, description4]
        
        
        return {title, url, id, img, descriptions, video}
      })
      setProjects(projects)

    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }

  }
 

  useEffect(() => {
    getData();
  }, []);

  return {projects, isLoading}
}