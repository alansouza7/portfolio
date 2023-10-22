import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import{Form} from 'react-router-dom'

const Contact = () => {
  return (
    <div className=" my-40">
        <h2 className="text-3xl lg:text-5xl font-bold my-4">Let's Connect 💬</h2>
        <p className="max-w-xl">If you consider me a good candidate for an open position, or if you'd like to discuss a freelance project, else if you just want to say hello, contact me on social media, or send me a message!</p>
        <ul className="flex gap-5 my-5">
            <li className="text-primary text-3xl"><a href="https://github.com/alansouza7" target="_blank"><BsGithub /></a> </li>
            <li className="text-primary text-3xl"> <a href="https://www.linkedin.com/in/alan-souza-uk/" target="_blank"><BsLinkedin/></a> </li>
        </ul>

        <form action="https://formspree.io/f/mjvqrped" method="POST" className="flex flex-col gap-5">
        <input name="name" type="text" placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />
        <input name="_replyto" type="text" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
        <textarea name="message" className="textarea textarea-primary max-w-xs" placeholder="message"></textarea>
        <button type="submit" className="btn max-w-xs btn-primary">send message</button>
        </form>
    </div>
  )
}

export default Contact