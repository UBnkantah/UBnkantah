import {  useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"
// import {FaBars} from "react-icons/fa";
const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
                <div className="p-2 flex md:hidden bg-primary  items-center rounded-full">
                    
                    <h1>UB</h1>   
                </div>
             
            </Link>
          
          <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 flex flex-col justify-center items-center
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        onClick={() => setOpen(!open)}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-xl ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="py-1 px-3 inline-block text-xl">
               Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="py-1 px-3 inline-block text-xl">
               Contacts
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="py-1 px-3 inline-block text-xl">
               Blogs
            </Link>
          </li>

        </ul>
      </div>
  )
}

export default Navbar