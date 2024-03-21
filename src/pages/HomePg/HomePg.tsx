import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import Ubj from "../../assets/homeimg.svg";
import Typewriter from "typewriter-effect";


const HomePg = () => {

  const TypeFunc = () => {
    return (
      <Typewriter
  options={{
    strings: ['A Software Developer', 'An Educator', 'A Content Creator'],
    autoStart: true,
    loop: true,
  }} />
    )
  }

  return (
      <div className="container md:pt-12 pt-4" >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center pt-4">
                <img
                  src={Ubj}
                  alt=""
                  className="w-100 rounded-full md:rounded-xl"
                />
              <div className="col-span-2 flex flex-col gap-3">
                <h2 className="text-primary md:text-5xl text-3xl text-center md:text-start font-['Josefin_Sans']"> - I'm Ubong Nkantah.</h2>
                <p className="md:text-3xl text-xl font-[400] text-center md:text-start">{TypeFunc()}</p>
                <p className="text-center md:text-start">
                  
As a dedicated Software Developer, I am fervent about coding, web development, and embracing new technologies. I thrive in collaborative environments, offering innovative ideas for organizational advancement. Additionally, I craft diverse educational content spanning videos, blogs, and graphics to enrich software engineering enthusiasts
                </p>
                <Link to="/about" className="">
                <div className="flex justify-center md:justify-start items-center">
            <button className="rounded-full relative py-2 ps-4 pe-12 flex flex-row justify-center items-center gap-2 border-2 border-primary">MORE ABOUT ME <span className="bg-primary rounded-full p-3 absolute right-0"><FaArrowRightLong size={20} /></span></button>
          </div>
                </Link>
                
              </div>

          <div></div>
        </div>
      </div> 
  )
}

export default HomePg