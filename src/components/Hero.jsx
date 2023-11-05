import img from '../assets/coder.svg'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className="hero min-h-screen my-10">
          <div className="hero-content flex-wrap flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg " />
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold">Hello, I'm Alan 👋🏻</h1>
              <p className="py-6">A Nottingham based frontend software developer with a strong
                  background in documentations layout and a passion for creating
                  memorable and engaging web experiences with React. I am currently a
                  support analyst for Kerridge Commercial Systems.<br/><br/> Click here to learn more about me!</p>
              <Link to="about" className="btn btn-primary">about me</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
