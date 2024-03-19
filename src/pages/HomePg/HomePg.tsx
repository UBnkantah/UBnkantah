import { Link } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import Ubj from "../../assets/ubj.jpg";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center pt-8">
              <div className="shadow-lg rounded-full md:rounded-xl"
              >
                <img
                  src={Ubj}
                  alt=""
                  className="w-100 rounded-full md:rounded-xl"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <h2 style={{fontSize: "50px"}}><span style={{color: "#ffb400"}}> - I'm Ubong Nkantah. </span> </h2>
                <p className="text-3xl font-[400]">{TypeFunc()}</p>
                <p>
                  I'm a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me
                </p>
                <Link to="/about" className="">
                <div>
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