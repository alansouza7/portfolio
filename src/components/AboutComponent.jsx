import img from '../assets/proud.svg'

const AboutComponent = () => {
  return (
    <div className='my-20'>
        
        <div className="hero min-h-screen ">
  <div className="hero-content flex-wrap flex-col lg:flex-row gap-10">
    <img src={img} className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold">About Me 👨🏻‍💻</h1>
      <p className="py-6">Hello again! Thank you for reaching this far. I recently graduated Scrimba Front End Developer Career Path bootcamp.

When I'm not coding, I am building miniatures and making short films about my process. I am also passionate about spending quality time with my family, and having multiple creative outlets.</p>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutComponent
