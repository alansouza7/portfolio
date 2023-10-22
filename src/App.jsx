import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, HomeLayout, Landing, Project, Projects, Error } from './pages';
import {loader as LandingLoader} from './pages/Landing'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Landing />, 
        loader: LandingLoader,
      },
      {
        path: '/:id',
        element: <Project />
      },
      {
        path: 'projects',
        element: <Projects />
      }
      ,
      {
        path: 'about',
        element: <About />
      }
    ]
  },
 
])

export default function App() {
return <RouterProvider router={router}></RouterProvider>;
}
