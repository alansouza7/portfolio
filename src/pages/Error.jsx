import { Link, useRouteError } from "react-router-dom"


const Error = () => {
  
const error = useRouteError()

  if(error.status === 404){
    return <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-7 justify-center items-center">
      <h3 className="text-5xl">Ohh!</h3>
      <p className="text-3xl">We can't seem to find the page you are looking for</p>
      <Link className="btn btn-primary" to="/">Back</Link>
      </div>
   
  </div>
  }

return (
 <div className="grid place-items-center min-h-screen">
   <div>
      <h3>Something went wrong</h3>
   </div>
 </div>
)
 
}

export default Error