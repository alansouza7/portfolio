import { FaCss3Alt, FaReact, FaHtml5  } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Toolkit = () => {
  return (
    <section>
      <h2 className="text-3xl lg:text-5xl font-bold">My Toolkit 💻</h2>

      <ul className="flex flex-wrap items-center justify-between my-20">
        <li className="text-primary text-7xl"><FaHtml5/></li>
        <li className="text-primary text-7xl"><FaCss3Alt/></li>
        <li className="text-primary text-7xl"><SiJavascript/></li>
        <li className="text-primary text-7xl"><FaReact/></li>
        <li className="text-primary text-7xl"><BsGithub/></li>
      </ul>
    </section>
  )
}

export default Toolkit